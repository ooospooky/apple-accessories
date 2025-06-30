import { createMachine, assign } from 'xstate';

import { allProducts } from '@/app/components/allProducts';
import {
  loadCartFromStorage,
  validateCartData,
  saveCartToStorage,
  type ProductList,
  type CartContext,
} from '@/lib/persistence';

type CartEvents =
  | { type: 'ADD_TO_CART'; id: string; color: string }
  | { type: 'CHANGE_PRODUCT_COUNT'; id: string; color: string; number: number }
  | { type: 'DELETE_FROM_CART'; id: string; color: string };

// init productList : {1:{total:0},2:{total:0},.....}
const getInitialProductList = (): ProductList => {
  return allProducts.reduce((acc: ProductList, item) => {
    return {
      ...acc,
      [item.id]: { total: 0 },
    };
  }, {});
};

// 包含持久化支援的初始狀態
const createInitialContext = (): CartContext => {
  // 先嘗試從 localStorage 載入購物車資料
  const persistedCart = loadCartFromStorage();

  if (persistedCart) {
    // 驗證持久化資料的完整性
    const validProductIds = allProducts.map((product) => product.id.toString());
    const validatedCart = validateCartData(persistedCart, validProductIds);

    // 合併持久化資料與預設結構
    const baseProductList = getInitialProductList();
    const mergedProductList = { ...baseProductList };

    // 將有效的購物車項目合併到基礎結構中
    Object.entries(validatedCart.productList).forEach(([productId, productData]) => {
      if (mergedProductList[productId]) {
        mergedProductList[productId] = productData;
      }
    });

    return {
      productList: mergedProductList,
      totalAmount: validatedCart.totalAmount,
    };
  }

  // 如果沒有持久化資料，使用預設初始狀態
  return {
    productList: getInitialProductList(),
    totalAmount: 0,
  };
};

const initialContext: CartContext = createInitialContext();

// Persistence action;
const persistCartAction = ({ context }: { context: CartContext }) => {
  saveCartToStorage(context);
};

const cartMachine = createMachine(
  {
    types: {
      context: {} as CartContext,
      events: {} as CartEvents,
    },
    id: 'cart',
    initial: 'idle',
    context: initialContext,
    states: {
      idle: {
        on: {
          ADD_TO_CART: {
            actions: ['addToCart', 'persistCart'],
          },
          CHANGE_PRODUCT_COUNT: {
            actions: ['changeProductCount', 'persistCart'],
          },
          DELETE_FROM_CART: {
            actions: ['deleteFromCart', 'persistCart'],
          },
        },
      },
    },
  },
  {
    actions: {
      addToCart: assign(({ context, event }) => {
        if (event.type === 'ADD_TO_CART') {
          const { id, color } = event;
          const updatedProductList = { ...context.productList };
          updatedProductList[id][color] = (updatedProductList[id][color] || 0) + 1;
          updatedProductList[id].total += 1;

          return {
            productList: updatedProductList,
            totalAmount: context.totalAmount + 1,
          };
        }
        return context;
      }),

      changeProductCount: assign(({ context, event }) => {
        if (event.type === 'CHANGE_PRODUCT_COUNT') {
          const { id, color, number } = event;
          const updatedProductList = { ...context.productList };
          const prevNumber = updatedProductList[id][color] || 0;
          const numberDiff = number - prevNumber;
          // total:2 black:2
          // total:? black:7  加上兩者的差即為新的產品數量
          updatedProductList[id][color] = number;
          updatedProductList[id].total += numberDiff;

          return {
            productList: updatedProductList,
            totalAmount: context.totalAmount + numberDiff,
          };
        }
        return context;
      }),

      deleteFromCart: assign(({ context, event }) => {
        if (event.type === 'DELETE_FROM_CART') {
          const { id, color } = event;
          const updatedProductList = { ...context.productList };
          const prevNumber = updatedProductList[id][color] || 0;

          delete updatedProductList[id][color]; // 移除該顏色的key
          updatedProductList[id].total -= prevNumber;

          return {
            productList: updatedProductList,
            totalAmount: context.totalAmount - prevNumber,
          };
        }
        return context;
      }),

      persistCart: persistCartAction,
    },
  },
);

export default cartMachine;
