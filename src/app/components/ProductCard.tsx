import React from 'react'
import Image from 'next/image'
import { IProduct } from './allProducts'

export const ProductCard: React.FC<IProduct> = ({ id, category, name, width, height, src, price }) => {
  const formattedPrice = price.toLocaleString('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  });
  return (
    <li key={id} className={`bg-[#f2f2f2] list-none overflow-hidden rounded-3xl border-4 border-solid border-white  flex flex-col justify-end ${height === 465 ? "basis-2/3" : "basis-1/3"}`}>
      <div className="photo px-16 m-auto ">
        <Image className="mx-auto mb-3.5 " src={src} width={width} height={height} alt={name} />
      </div>
      <div>
        <h3 className="text-center font-semibold text-lg mb-10 ">{name}</h3>
        <p className='text-center font-normal text-base mb-20'>NT{formattedPrice}</p>
      </div>
    </li>
  )
}
// ${productIndex === 2 ? "basis-2/3" : "basis-1/3"}

// className={` ${productIndex === 1 ? "pt-16" : ""} `}