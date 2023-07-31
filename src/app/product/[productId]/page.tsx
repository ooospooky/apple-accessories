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
import { ColorSelect } from '@/app/components/ColorSelect';
import { Carousel } from '@/app/components/Carousel';


export default function ProductId({ params }: { params: { productId: string } }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const foundProduct = allProducts.find((item) => item.id === params.productId);
  const { id, category, name, width, height, coverImage, src, price, colorsType, colors, productInfo, compatibilityInfo }: IProduct = foundProduct || {} as IProduct;


  return (

    <div className="w-full h-full   ">
      <div className="w-7/12 h-full my-12 mx-auto flex flex-row">
        <div className="basis-1/3 flex flex-col gap-12">
          <h2 className="text-6xl font-semibold leading-tight ">{name} -{selectedColor}</h2>
          <PriceInfo price={price} />
          {colors && colorsType && <ColorSelect colors={colors} colorsType={colorsType} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />}
          <OrderTimeAndDate flexDirection='flex-col' />
          <AddToCartBtn />
          <CollectionInfo />
          <PurchaseAssistance />


        </div>
        <div className="basis-2/3">
          <div className="w-full h-full  m-auto flex flex-col content-between ">
            <Carousel src={src} selectedColor={selectedColor} />
          </div>
        </div>


      </div>
      <section className="w-7/12 h-full my-12 mx-auto flex flex-col">
        <ProductInfoAndCompatibility productInfo={productInfo} compatibilityInfo={compatibilityInfo} />
      </section>
    </div>
  )
}

