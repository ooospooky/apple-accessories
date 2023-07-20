import React from 'react'
import Image from 'next/image'
import { ProductList } from '../components/ProductList'
export default function Mac() {
  return (
    <div className='w-full'>
      <div className='headblock w-full h-full flex flex-row bg-[#f5f5f7] px-80'  >
        <div className="info basis-1/2 flex flex-col justify-center items-center  gap-12" >
          <h2 className="text-7xl font-semibold mx-1 leading-tight">MagSafe。混‍搭，很⁠搭。</h2>
          <p className='text-3xl '>保護殼、卡套、無線充電器，或行動電源，全都可貼合。</p>
        </div>
        <div className='basis-1/2 -ml-8' >
          <Image src="/iphone/iphone-home.jpeg" alt="Homepage-IMG" height={480} width={900} />
        </div>
      </div>

      <h2 className="text-5xl font-semibold tracking-normal pb-16 pt-24 text-center" data-analytics-section="Mac 精選配件">Mac 精選配件</h2>

      {/* Porducts */}
      <div className='w-full m-auto '>
        <ul className="w-full flex flex-wrap m-0 mb-20">
          < ProductList type='iphone' />
        </ul>
      </div>
    </div>
  )
}
