'use client'
import React, { useState } from 'react'
import { allProducts, IProduct } from '@/app/components/allProducts'
import Image from 'next/image';
import { OrderTimeAndDate } from '@/app/components/OrderTimeAndDate';
import { AddToCartBtn } from '@/app/components/AddToCartBtn';
import { CollectionInfo } from '@/app/components/CollectionInfo';
import { PurchaseAssistance } from '@/app/components/PurchaseAssistance';
import { PriceInfo } from '@/app/components/PriceInfo';
import { ProductInfoAndCompatibility } from '@/app/components/ProductInfoAndCompatibility';


export default function ProductId({ params }: { params: { productId: string } }) {
  const foundProduct = allProducts.find((item) => item.id === params.productId);
  const { id, category, name, width, height, src, price, productInfo, compatibilityInfo }: IProduct = foundProduct || {} as IProduct;



  return (

    <div className="w-full h-full   ">
      <div className="w-7/12 h-full my-12 mx-auto flex flex-row">
        <div className="basis-1/3 flex flex-col gap-12">
          <h2 className="text-6xl font-semibold leading-tight ">{name}</h2>
          <PriceInfo price={price} />
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
          <OrderTimeAndDate flexDirection='flex-col' />
          <AddToCartBtn />
          <CollectionInfo />
          <PurchaseAssistance />


        </div>
        <div className="basis-2/3">
          <div className="w-full h-full  m-auto  ">
            <Image src={src} layout="responsive" height={1} width={1} alt='' className='object-fill m-auto max-w-5xl max-h-5xl' />
          </div>
        </div>


      </div>
      <section className="w-7/12 h-full my-12 mx-auto flex flex-col">
        <ProductInfoAndCompatibility productInfo={productInfo} compatibilityInfo={compatibilityInfo} />
      </section>
    </div>
  )
}

