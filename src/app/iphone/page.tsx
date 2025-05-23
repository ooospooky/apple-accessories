import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import ProductList from '../components/ProductList';

export const metadata: Metadata = {
  title: '購買 iPhone 配件 - Apple(台灣)',
  description: 'Apple accessories store',
};

const Headblock = () => (
  <div className="headblock  w-full h-full flex flex-col md:flex-row bg-[#f5f5f7] xl:px-80 py-10">
    <div className="info basis-1/2 flex flex-col justify-center items-center  gap-12">
      <h2 className="text-5xl sm:text-7xl font-semibold mx-1 leading-tight">
        MagSafe。混‍搭，很⁠搭。
      </h2>
      <p className="text-2xl sm:text-3xl">保護殼、卡套、無線充電器，或行動電源，全都可貼合。</p>
    </div>
    <div className="basis-1/2 xl:-ml-8">
      <Image
        priority
        src="/apple-homepageIMG.png"
        alt="Homepage-IMG"
        layout="responsive"
        height={300}
        width={900}
      />
    </div>
  </div>
);

const Iphone = () => {
  return (
    <div className="w-full">
      <Headblock />
      <h2
        className="text-5xl font-semibold tracking-normal pb-16 pt-24 text-center"
        data-analytics-section="Mac 精選配件"
      >
        iPhone 精選配件
      </h2>
      <ProductList type="iphone" />
    </div>
  );
};
export default Iphone;
