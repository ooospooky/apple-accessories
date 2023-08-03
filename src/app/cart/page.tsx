"use client"
import React, { useState, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/store'

import { changeProductCount } from '@/redux/features/cartSlice'
import { allProducts, IProduct } from '../components/allProducts'
import { AddToCartBtn } from '../components/AddToCartBtn'
import getFormattedPrice from '../helper/getFormattedPrice'
import { OrderTimeAndDate } from '../components/OrderTimeAndDate'

export default function Cart() {
  const dispatch = useAppDispatch()

  const handleProductCountChange = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>, id: string, color: string) => {
    console.log(event.target.value, id, color);
    dispatch(changeProductCount({ id: id, color: color, number: Number(event.target.value) }))

  };
  //使用 useRouter() 以此使用router.back()回到上一頁
  const router = useRouter()


  //使用 useAppSelector 從 Redux store 中取得購物車狀態資料
  const cart = useAppSelector((state) => state.cartSliceReducer.value)

  //取得購物車中產品的 id 陣列
  const keys = Object.keys(cart);

  const CartHeader = () => {
    return (
      <div className='w-full pb-16 border-b border-[#d2d2d7] text-center'>
        <h1 className='block text-6xl font-semibold'>以下是你購物袋內的商品 NT$37,480。</h1>
        <span className='block text-2xl font-normal pt-10'>所有訂單均享免額外付費運送服務。</span>
        <div className='mt-12 w-1/3 m-auto' >
          <AddToCartBtn btnText="結帳" />
        </div>
      </div>
    )
  }
  const RenderProduct = () => {
    return (
      <div className='pt-24'>
        {keys.map((id) => {
          // 找到對應 id 的產品資料
          const foundProduct = allProducts.find((item) => item.id === id)

          // 解構購物車中產品的資料，取得總數量及其他屬性
          const { total, ...otherProps } = cart[id];

          // 如果產品的總數量大於 0，且找到了對應的產品資料
          if (cart[id].total > 0 && foundProduct) {
            if ('noColor' in otherProps) {
              // 產品沒有顏色選項，顯示產品名稱及總數量
              return (
                <div key={id}>
                  {foundProduct.name} x{total}
                </div>
              )
            } else {
              // 產品有顏色選項，顯示每個顏色選項的名稱及數量
              const colorOptions = Object.entries(cart[id]).filter(([key, value]) => key !== 'total');
              return colorOptions.map(([color, count]) => {
                console.log('f', foundProduct.src[color])
                const isCountLessThanTen = count < 10;
                return (
                  <div key={color} className="pb-24 mb-24 border-b border-[#d2d2d7]">
                    <div className='w-full flex flex-row'>
                      <div className='basis-1/4' >
                        <Image src={foundProduct.src[color][0]} alt='' height={400} width={400} />
                      </div>
                      <div className='basis-3/4'>
                        <div className='h-full flex flex-col justify-center '>
                          <div className=" h-1/2 mb-auto mt-3 flex flex-row  text-4xl font-semibold">
                            <div className="basis-6/12 pr-10">
                              <Link className="hover:text-[#0071e3] " href={`/product/${foundProduct.id}`}> {foundProduct.name} - {color} </Link>
                            </div>
                            <div className="basis-2/12">
                              {isCountLessThanTen ? <select
                                className=""
                                id="dropdown"
                                value={count}
                                onChange={(event) => handleProductCountChange(event, id, color)}
                              >
                                {[...Array(10)].map((_, index) => (
                                  <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                  </option>
                                ))}

                              </select> : <div className="w-32 px-6 py-3 rounded-2xl border border-[#86868b] flex flex-col">
                                <span className='text-base text-[#86868b]'>數量</span>
                                <input
                                  className="w-full text-[#1d1d1f] text-3xl font-normal [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                  id="quantityInput"
                                  type="number"
                                  min="0"
                                  defaultValue={count}
                                  onBlur={(event) => handleProductCountChange(event, id, color)}
                                />
                              </div>}


                            </div>

                            <div className="basis-4/12">{getFormattedPrice(foundProduct.price * count)}
                            </div>
                          </div>
                          <div className='h-1/2 pt-7 border-t border-[#d2d2d7]'>
                            <OrderTimeAndDate flexDirection='flex-row' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              });

            }
          }
        })}
        <button type="button" onClick={() => router.back()}>
          Click here to go back
        </button>
      </div>
    )
  }



  return (
    <div className='h-full w-8/12 m-auto my-20'>
      <CartHeader />
      <RenderProduct />



    </div>
  )

}

