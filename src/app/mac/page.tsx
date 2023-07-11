import React from 'react'
import Image from 'next/image'
import {products} from '../components/products'
export default function Mac() {
  return (
    <div className='w-full'>
      <div className='header w-full h-full bg-gray-100 flex flex-row'>
        <div className='basis-2/5 my-60 ml-40 text-center'>
          <h2 className=" text-7xl mb-10">締造完美連接。</h2>
          <p className="text-3xl">選購電源與連接線</p>
        </div>
        <div className='basis-3/5 ' >
          <Image className='mt-40 ml-auto h-24 w-4/5 ' src='/mac/mac-cables-accessories-usbc.png' width={986} height={58} alt="ucbc"></Image>
          <Image className='mt-16 h-32' src='/mac/mac-cables-accessories-magsafe.png' width={1152} height={120} alt="ucbc"></Image>
        </div>
      </div>

      {/* Porducts */}
      <div  className='w-full px-40 '>
        <ul className="w-full flex flex-wrap m-0 mb-20">
          {products.map(({id,category,name,width,height,src,price})=>{
            return(
              <li key={id} className={`bg-[#f2f2f2] list-none overflow-hidden rounded-3xl border-4 border-solid border-white ${name === "Studio Display" ? "basis-2/3" : "basis-1/3" }`}>
            <div >
              <div className="photo px-16 py-0 ">
                <Image  className="mx-auto mb-3.5 " src={src} width={width} height={height} alt={name} />
              </div>
              <div  className={` ${id === "1" ? "pt-16" : "" }`}>
                <h3 className="text-center font-normal text-lg mb-10 ">{name}</h3>
                <p className='text-center font-normal text-base mb-20'>{price}</p>
              </div>
            </div>
          </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
