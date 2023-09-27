import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { ProductList } from '../components/ProductList'

export const metadata: Metadata = {
  title: '購買 iPad 配件 - Apple(台灣)',
  description: 'Apple accessories store',
}

// 頁面頂部的區塊，包含標題、描述與圖片
const Headblock = () => (
  <div className='headblock w-full h-full flex flex-col md:flex-row bg-[#fbfbfd] lg:px-20 xl:px-80  py-10'>
    <div className="info basis-1/2 flex flex-col justify-center items-center  gap-12" >
      <h2 className="text-5xl">不只做更多，還做得漂亮。</h2>
      <p className='text-2xl'>選購保護配件與防護</p>
    </div>
    <div className='basis-1/2 xl:-ml-28' >
      <Image
        priority={true}
        src="/ipad/ipad-page.png"
        alt="Homepage-IMG"
        layout="responsive"
        height={480}
        width={900} />
    </div>
  </div>
)

export default function Mac() {
  return (
    <div className='w-full'>
      <Headblock />
      <h2 className="text-5xl font-semibold tracking-normal pb-16 pt-24 text-center" data-analytics-section="Mac 精選配件">iPad 精選配件</h2>

      {/* Porducts */}
      <div className='w-full m-auto '>
        <ul className="w-full flex flex-wrap m-0 mb-20">
          {/* 顯示 Mac 配件列表，傳遞 type='ipad' 作為參數 */}
          < ProductList type='ipad' />
        </ul>
      </div>
    </div>
  )
}
