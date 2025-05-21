'use client';

import { FunctionComponent, useCallback, useState } from 'react';

import { allProducts, IProduct } from '@/app/components/allProducts';
import Carousel from '@/app/components/Carousel';
import CollectionInfo from '@/app/components/CollectionInfo';
import ColorSelect from '@/app/components/ColorSelect';
import LoadingSvg from '@/app/components/loadingSvg';
import OrderTimeAndDate from '@/app/components/OrderTimeAndDate';
import PriceInfo from '@/app/components/PriceInfo';
import ProductInfoAndCompatibility from '@/app/components/ProductInfoAndCompatibility';
import PurchaseAssistance from '@/app/components/PurchaseAssistance';
import { CartContext } from '@/xstate/provider';

interface ProductIdProps {
  params: {
    productId: string;
  };
}

const ProductId: FunctionComponent<ProductIdProps> = ({ params }) => {
  const { send } = CartContext.useActorRef();
  const [isLoading, setIsLoading] = useState(false);
  // 獲取產品數據
  const foundProduct = allProducts.find((item) => item.id === params.productId);
  const { id, name, src, price, colorsType, colors, productInfo, compatibilityInfo }: IProduct =
    foundProduct || ({} as IProduct);

  const [selectedColor, setSelectedColor] = useState<string>(colorsType?.[0] ?? 'noColor');

  // 加入購物車後顯示loading回饋
  const handleAddToCart = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      send({ type: 'ADD_TO_CART', id, color: selectedColor });
      setIsLoading(false);
    }, 700);
  }, [id, selectedColor, send]);

  const RenderBtn = (
    <div>
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isLoading}
        className={`inline-block w-full px-2 py-4 rounded-xl  text-center whitespace-no-wrap text-base font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white  ${
          isLoading ? ' cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {isLoading ? <LoadingSvg /> : '加入購物車'}
      </button>
    </div>
  );

  return (
    <div className="w-full h-full   ">
      <div className="w-11/12 lg:w-8/12 h-full my-12 mx-auto flex flex-col md:flex-row">
        <div className="basis-1/3 flex flex-col gap-12">
          {/* 根據是否需選擇顏色顯示名稱 有selectedColor時呈現{name} - {selectedColor} 沒有則呈現{name} */}
          <h2 className="text-6xl font-semibold leading-tight ">
            {name} {selectedColor && `- ${selectedColor}`}
          </h2>
          {/* 顯示價錢與分期資訊 */}
          <PriceInfo price={price} />

          {/* 在@media (min-width: 768px)時才顯示此carousel */}
          <div className="md:hidden">
            <Carousel src={src} selectedColor={selectedColor} />
          </div>

          {/* 有顏色選項時顯示顏色選擇器 */}
          {colors && colorsType && (
            <ColorSelect
              colors={colors}
              colorsType={colorsType}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          )}

          {/* 顯示訂單可取貨時間與與運送時間 */}
          <OrderTimeAndDate flexDirection="flex-col" />

          {/* 顯示加入購物車button */}
          {RenderBtn}

          {/* 表達用戶可加入收藏 */}
          <CollectionInfo />

          {/* 顯示協助資訊 */}
          <PurchaseAssistance />
        </div>

        {/* 產品圖像 */}
        <div className="basis-2/3 hidden md:block">
          <div className="w-full h-full  m-auto flex flex-col content-between">
            <Carousel src={src} selectedColor={selectedColor} />
          </div>
        </div>

        {/* 產品信息 */}
      </div>
      <section className="w-11/12 lg:w-8/12 h-full my-12 mx-auto flex flex-col">
        <ProductInfoAndCompatibility
          productInfo={productInfo}
          compatibilityInfo={compatibilityInfo}
        />
      </section>
    </div>
  );
};

export default ProductId;
