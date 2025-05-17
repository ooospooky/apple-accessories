import React from 'react';
import Image from 'next/image';
import { IProduct } from './allProducts';
import Link from 'next/link';

// ProductCard 元件，用於顯示單個商品卡片
export const ProductCard: React.FC<IProduct> = ({
  id,
  category,
  name,
  width,
  height,
  coverImage,
  src,
  price,
  colors,
}) => {
  // 格式化價格，從數字轉為如$18,000
  const formattedPrice = price.toLocaleString('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  });

  // 產生顏色圓圈
  const colorCircle = (color: string) => (
    <div key={color} className={`w-[16px] h-[16px] rounded-full ${color}`} />
  );

  return (
    <li
      key={id}
      className={`bg-[#f2f2f2] list-none overflow-hidden rounded-3xl border-4 border-solid border-white  flex flex-col justify-end ${height === 465 ? 'order-first sm:order-none basis-full sm:basis-2/3' : 'basis-1/2 sm:basis-1/3'}`}
    >
      <Link href={`/product/${id}`}>
        {/* 商品圖片 */}
        <div className="photo px-16 m-auto  ">
          <Image
            className="mx-auto mb-3.5 "
            src={coverImage}
            width={width}
            height={height}
            alt={name}
          />
        </div>

        {/* 商品名稱和價格 */}
        <div>
          <h3 className="text-center font-semibold text-lg mb-10 ">{name}</h3>
          <p className="text-center font-normal text-base mb-6 sm:mb-10">NT{formattedPrice}</p>
        </div>

        {/* 顏色圓圈 */}
        <ul className="flex flex-row justify-center items-center gap-3 mb-10 sm:mb-16">
          {colors ? colors.map(colorCircle) : colorCircle('white')}
        </ul>
      </Link>
    </li>
  );
};
