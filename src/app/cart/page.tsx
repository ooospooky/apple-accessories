"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/store'

import { allProducts } from '../components/allProducts'

export default function Cart() {
  //使用 useRouter() 以此使用router.back()回到上一頁
  const router = useRouter()

  //使用 useAppSelector 從 Redux store 中取得購物車狀態資料
  const cart = useAppSelector((state) => state.cartSliceReducer.value)

  //取得購物車中產品的 id 陣列
  const keys = Object.keys(cart);
  console.log(cart)
  return (
    <>
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
            return colorOptions.map(([color, count]) => (
              <div key={color}>
                {foundProduct.name} - {color} x{count}
              </div>
            ));
          }
        }
      })}
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  )

}

