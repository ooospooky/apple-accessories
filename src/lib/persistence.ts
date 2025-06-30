export interface ProductList {
  [id: string]: {
    total: number;
    [color: string]: number;
  };
}

export interface CartContext {
  productList: ProductList;
  totalAmount: number;
}

const CART_STORAGE_KEY = 'apple-accessories-cart';

/**
 * 檢查 localStorage 是否可用
 * 在某些情況下（隱私模式、禁用等）localStorage 可能不可用
 */
const isLocalStorageAvailable = (): boolean => {
  try {
    const testKey = '__localStorage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

/**
 * 從 localStorage 讀取購物車資料
 * @returns 購物車資料或 null（如果不存在或解析失敗）
 */
export const loadCartFromStorage = (): CartContext | null => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage 不可用，跳過購物車資料載入');
    return null;
  }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored) as CartContext;

    // 基本資料驗證
    if (!parsed || typeof parsed !== 'object') {
      console.warn('購物車資料格式錯誤，清除儲存資料');
      localStorage.removeItem(CART_STORAGE_KEY);
      return null;
    }

    if (!parsed.productList || typeof parsed.totalAmount !== 'number') {
      console.warn('購物車資料結構不完整，清除儲存資料');
      localStorage.removeItem(CART_STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch (error) {
    console.error('讀取購物車資料失敗:', error);
    // 清除損壞的資料
    localStorage.removeItem(CART_STORAGE_KEY);
    return null;
  }
};

/**
 * 將購物車資料儲存到 localStorage
 * @param cartContext 要儲存的購物車資料
 */
export const saveCartToStorage = (cartContext: CartContext): void => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage 不可用，跳過購物車資料儲存');
    return;
  }

  try {
    const serialized = JSON.stringify(cartContext);
    localStorage.setItem(CART_STORAGE_KEY, serialized);
  } catch (error) {
    console.error('儲存購物車資料失敗:', error);

    // 如果是儲存空間不足，嘗試清除舊資料重試
    if (error instanceof DOMException && error.code === 22) {
      console.warn('儲存空間不足，清除現有購物車資料');
      localStorage.removeItem(CART_STORAGE_KEY);
    }
  }
};

/**
 * 清除儲存的購物車資料
 */
export const clearCartStorage = (): void => {
  if (!isLocalStorageAvailable()) {
    return;
  }

  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error('清除購物車資料失敗:', error);
  }
};

/**
 * 驗證購物車資料的完整性
 * 檢查產品清單是否包含有效的產品 ID 和數量
 */
export const validateCartData = (
  cartContext: CartContext,
  validProductIds: string[],
): CartContext => {
  const validatedProductList: ProductList = {};
  let validatedTotalAmount = 0;

  // 驗證每個產品項目
  Object.entries(cartContext.productList).forEach(([productId, productData]) => {
    // 檢查產品 ID 是否有效
    if (!validProductIds.includes(productId)) {
      console.warn(`發現無效的產品 ID: ${productId}，已移除`);
      return; // 使用 return 替代 continue
    }

    // 重建產品資料，確保數值正確
    const validatedProductData: { total: number; [color: string]: number } = { total: 0 };

    Object.entries(productData).forEach(([key, value]) => {
      if (key === 'total') return; // total 會重新計算，使用 return 替代 continue

      if (typeof value === 'number' && value > 0) {
        validatedProductData[key] = value;
        validatedProductData.total += value;
      }
    });

    // 只保留有商品的產品
    if (validatedProductData.total > 0) {
      validatedProductList[productId] = validatedProductData;
      validatedTotalAmount += validatedProductData.total;
    }
  });

  return {
    productList: validatedProductList,
    totalAmount: validatedTotalAmount,
  };
};
