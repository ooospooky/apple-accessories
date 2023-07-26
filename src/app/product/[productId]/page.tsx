'use client'
import React from 'react'
import { allProducts, IProduct } from '@/app/components/allProducts'
import Image from 'next/image';
export default function productId({ params }: { params: { productId: string } }) {
  const foundProduct = allProducts.find((item) => item.id === params.productId);
  const { id, category, name, width, height, src, price }: IProduct = foundProduct || {} as IProduct;

  const formattedPrice = price.toLocaleString('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  });
  return (
    <div className="w-full h-full   ">
      <div className="w-9/12 h-full my-12 mx-auto flex flex-row">
        <div className="basis-1/3 flex flex-col gap-12">
          <h2 className="text-6xl font-semibold leading-tight ">{name}</h2>
          <div className="flex flex-col gap-1">
            <span className='text-3xl font-normal '>{formattedPrice}</span>
            <a target="_blank" href="https://www.apple.com/tw/shop/financing/installments/overlay?ca=1790.00&product=MPPJ3FE/A" className='text-xl font-normal text-[#06c]'> 0 利率分期付款，每月 NT$149 起，共 12 個月</a>
          </div>
          <div>
            <h2 className="">顏色 - 墨水色</h2>
            <ul className='flex flex-row gap-6 my-4'>
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value="pink"
                    className="hidden peer/darkred"
                  />
                  <div
                    className="w-16 h-16 rounded-full bg-pink-800 peer-checked/darkred:ring peer-checked/darkred:ring-blue-500 peer-checked/darkred:ring-offset-4"
                  ></div>
                </label>

              </li>
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value="blue"
                    className="hidden peer/blue"
                  />
                  <div
                    className="w-16 h-16 rounded-full bg-blue-500 peer-checked/blue:ring peer-checked/blue:ring-blue-500 peer-checked/blue:ring-offset-4"
                  ></div>
                </label>
              </li>
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value="pink"
                    className="hidden peer/pink"
                  />
                  <div
                    className="w-16 h-16 rounded-full bg-pink-500 peer-checked/pink:ring peer-checked/pink:ring-blue-500 peer-checked/pink:ring-offset-4"
                  ></div>
                </label>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold">立即訂購。店內取貨：</span>
            <span className="text-xl font-normal">今天，地點：Apple 台北 101</span>
          </div>
          <div>
            <button className="inline-block w-full px-2 py-4 rounded-xl cursor-pointer text-center whitespace-no-wrap text-base font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white  ">加入購物車</button>
          </div>
          <div>
            <span className="text-xl font-semibold">需要一點時間嗎？</span>
            <br />
            <span className="text-xl font-normal">將這部裝置收藏到「你的收藏」，即可保留你選擇的所有配置，你可以隨時從上次離開處接續進行。</span>
          </div>
          <div className='w-full pt-12 border-t border-gray-400 flex flex-row items-center whitespace-nowrap'>
            <Image src="/svg/chat.svg" priority width={25} height={25} alt="chat" className='mr-3' />
            <span className="text-base font-semibold">購買時取得協助。</span>
            <a target="_blank" href="https://contactretail.apple.com/Help" className="text-base text-[#06c]">
              立即與我們交流
            </a>
            <span className="text-base font-normal">或致電 0800-020-021。</span>
          </div>


        </div>
        <div className="basis-2/3">
          <div className="w-full h-full  m-auto ">
            <Image src={src} layout="responsive" height={1} width={1} alt='' className='object-fill m-auto max-w-5xl max-h-5xl' />
          </div>
        </div>
      </div>
    </div>
  )
}
