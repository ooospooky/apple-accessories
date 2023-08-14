"use client"
import React, { useState, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/store'

import { changeProductCount, deleteFromCart } from '@/redux/features/cartSlice'
import { allProducts, IProduct } from '../components/allProducts'
import { AddToCartBtn } from '../components/AddToCartBtn'
import getFormattedPrice from '../helper/getFormattedPrice'
import { OrderTimeAndDate } from '../components/OrderTimeAndDate'
import QuantityField from '../components/QuantityField'
import { PurchaseAssistance } from '../components/PurchaseAssistance'

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0)
  const dispatch = useAppDispatch()
  //使用 useAppSelector 從 Redux store 中取得購物車狀態資料
  const cart = useAppSelector((state) => state.cartSliceReducer.value)
  //取得購物車中產品的 id 陣列
  const keys = Object.keys(cart);


  // 在需要時更新 totalPrice
  useEffect(() => {
    const calculateTotalPrice = () => {
      return keys.reduce((total, id) => {
        const foundProduct = allProducts.find((item) => item.id === id);
        if (cart[id]['total'] > 0 && foundProduct) {
          return total + foundProduct.price * cart[id]['total'];
        }
        return total;
      }, 0);
    };
    setTotalPrice(calculateTotalPrice());
  }, [cart, keys]);

  const handleProductCountChange = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>, id: string, color: string) => {
    const count = Number(event.target.value)
    const number: number = count < 1 ? 1 : count;
    dispatch(changeProductCount({ id: id, color: color, number: number }))

  };
  //使用 useRouter() 以此使用router.back()回到上一頁
  const router = useRouter()

  const CartHeader = () => {
    return (
      <div className='w-full pb-16 border-b border-[#d2d2d7] text-center'>
        <h1 className='block text-6xl font-semibold'>以下是你購物袋內的商品 {getFormattedPrice(totalPrice)}。</h1>
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
                  <div className="pb-24 mb-24 border-b border-[#d2d2d7]">
                    <div className='w-full flex flex-row'>
                      <div className='basis-1/4' >
                        <Image src={foundProduct.src['noColor'][0]} alt='' height={400} width={400} />
                      </div>
                      <div className='basis-3/4'>
                        <div className='h-full flex flex-col justify-center '>
                          <div className=" h-1/2 mb-auto mt-3 flex flex-row  text-4xl font-semibold">
                            <div className="basis-6/12 pr-10">
                              <Link className="hover:text-[#0071e3] " href={`/product/${foundProduct.id}`} > {foundProduct.name}  </Link>
                            </div>
                            <div className="basis-2/12">
                              <QuantityField
                                count={otherProps['noColor']}
                                id={id}
                                color={'noColor'}
                                handleProductCountChange={handleProductCountChange}
                              />
                            </div>
                            <div className="basis-4/12 flex flex-col items-end gap-5">
                              {getFormattedPrice(foundProduct.price * otherProps['noColor'])}
                              <button
                                className="text-2xl text-[#4182c3] font-normal hover:underline"
                                onClick={() => dispatch(deleteFromCart({ id: id, color: 'noColor' }))}>
                                移除</button>
                            </div>
                          </div>
                          <div className='h-1/2 pt-7 border-t border-[#d2d2d7]'>
                            <OrderTimeAndDate flexDirection='flex-row' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                </div>
              )
            } else {
              // 產品有顏色選項，顯示每個顏色選項的名稱及數量
              const colorOptions = Object.entries(cart[id]).filter(([key, value]) => key !== 'total');
              return colorOptions.map(([color, count]) => {
                console.log('f', foundProduct.src[color])
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
                              <QuantityField
                                count={count}
                                id={id}
                                color={color}
                                handleProductCountChange={handleProductCountChange}
                              />
                            </div>
                            <div className="basis-4/12 text-right">
                              {getFormattedPrice(foundProduct.price * count)}
                              <button
                                className="text-2xl text-[#4182c3] font-normal hover:underline"
                                onClick={() => dispatch(deleteFromCart({ id: id, color: color }))}>
                                移除</button>
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
      </div>
    )
  }

  const Summary = () => {
    return (
      <div className='w-9/12 flex flex-col ml-auto'>
        <div className='w-full flex flex-row justify-between text-2xl mb-5'>
          <span>小計</span>
          <span>{getFormattedPrice(totalPrice)}</span>
        </div>
        <div className='w-full flex flex-row justify-between text-2xl'>
          <span>運費</span>
          <span>免額外付費</span>
        </div>
        <div className='w-full flex flex-row justify-between pt-9 mt-6 border-t border-[#d2d2d7] text-4xl font-semibold'>
          <span>你的總金額</span>
          <span>{getFormattedPrice(totalPrice)}</span>
        </div>
        <span className="text-xl text-[#6e6e73] text-right ">含加值型營業稅 NT$1,105</span>
        <span className="text-xl tracking-wide text-right mt-2 ">欲使用銀行轉帳付款，請致電 0800-020-021。</span>
      </div>

    )
  }

  const CashOut = () => {
    return (
      <div className='w-9/12 flex justify-end ml-auto'>
        <button className="w-1/2 inline-block mt-12 px-12 py-6 rounded-xl cursor-pointer text-center whitespace-no-wrap text-2xl font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white  ">結帳</button>
      </div>
    )
  }

  const Assistance = () => {
    return (
      <div className='w-full my-24 py-12 border-y border-gray-400 flex flex-row items-center whitespace-nowrap text-2xl '>
        <span className=" font-semibold">需要進一步協助？</span>
        <a target="_blank" href="https://contactretail.apple.com/Help" className=" text-[#06c]">
          立即與我們交流
        </a>
        <span className=" font-normal">或致電 0800-020-021。</span>
      </div>
    )
  }

  
  return (
    <div className='h-full w-8/12 m-auto my-20'>
      <CartHeader />
      <RenderProduct />
      <Summary />
      <CashOut />
      <Assistance />
    </div>
  )

}

