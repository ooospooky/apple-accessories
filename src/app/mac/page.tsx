import type { Metadata } from 'next';
import Image from 'next/image';
import { FunctionComponent } from 'react';

import ProductList from '../components/ProductList';

export const metadata: Metadata = {
  title: '購買 Mac 配件 - Apple(台灣)',
  description: 'Apple accessories store',
};

// 頁面頂部的區塊，包含標題、描述與圖片
const Headblock = () => (
  <div className="header w-full h-full bg-gray-100 flex flex-col md:flex-row py-20 md:py-0 ">
    <div className="basis-2/5  md:my-60 lg:ml-40 text-center">
      <h2 className=" text-7xl mb-10">締造完美連接。</h2>
      <p className="text-3xl">選購電源與連接線</p>
    </div>
    <div className="basis-3/5 pl-20 md:pl-0">
      <Image
        className="mt-40 ml-auto h-24 w-4/5 "
        src="/mac/mac-cables-accessories-usbc.png"
        width={986}
        height={58}
        alt="ucbc1"
      />
      <Image
        className="mt-16 h-32"
        src="/mac/mac-cables-accessories-magsafe.png"
        width={1152}
        height={120}
        alt="ucbc2"
      />
    </div>
  </div>
);

const Mac: FunctionComponent = () => {
  return (
    <div className="w-full">
      <Headblock />
      <h2
        className="text-5xl font-semibold tracking-normal pb-16 pt-24 text-center"
        data-analytics-section="Mac 精選配件"
      >
        Mac 精選配件123
      </h2>
      <ProductList type="mac" />
    </div>
  );
};
export default Mac;
