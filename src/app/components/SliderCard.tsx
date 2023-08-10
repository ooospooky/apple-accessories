import React from 'react'
import Image from 'next/image'
import { IProduct } from './allProducts'
import Link from 'next/link';

export const SliderCard: React.FC<IProduct> = ({ id, category, name, width, height, coverImage, src, price, colors }) => {
  const formattedPrice = price.toLocaleString('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  });
  return (

    <div key={id} className={`bg-[#f2f2f2] list-none overflow-hidden rounded-3xl border-4 border-solid border-white  flex flex-col justify-center h-[550px]`} >
      <Link href={`/product/${id}`}>
        <div className="photo px-16 m-auto h-[340px] flex justify-center items-center ">
          <Image className="mx-auto mb-3.5  " src={coverImage} width={266} height={291} alt={name} />
        </div>
        <div>
          <h3 className="text-center font-semibold text-lg mb-10 px-3">{name}</h3>
          <p className='text-center font-normal text-base mb-16'>NT{formattedPrice}</p>
        </div>
        <ul className="flex flex-row justify-center items-center gap-3 mb-16">
          {colors?.map((color) => {
            return (
              <div key={color} className={`w-[16px] h-[16px] rounded-full ${color}`}>
              </div>
            )
          })}
        </ul>
      </Link>

    </div>
  )
}
