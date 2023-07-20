import React from 'react'
import Image from 'next/image'

export const ProductCard = () => {
  return (
    <li key={id} className={`bg-[#f2f2f2] list-none overflow-hidden rounded-3xl border-4 border-solid border-white ${name === "Studio Display" ? "basis-2/3" : "basis-1/3"}`}>
      <div >
        <div className="photo px-16 py-0 ">
          <Image className="mx-auto mb-3.5 " src={src} width={width} height={height} alt={name} />
        </div>
        <div className={` ${id === "1" ? "pt-16" : ""}`}>
          <h3 className="text-center font-normal text-lg mb-10 ">{name}</h3>
          <p className='text-center font-normal text-base mb-20'>{price}</p>
        </div>
      </div>
    </li>
  )
}
