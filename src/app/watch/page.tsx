import type { Metadata } from 'next';
import Image from 'next/image';
import { FunctionComponent } from 'react';

import ProductList from '../components/ProductList';

export const metadata: Metadata = {
  title: '購買 Apple Watch 配件 - Apple(台灣)',
  description: 'Apple accessories store',
};

const Headblock: FunctionComponent = () => (
  <div className="headblock w-full h-full flex flex-col md:flex-row bg-[#f5f5f7] lg:pl-20 xl:pl-80">
    <div className="info basis-1/2 py-10 flex flex-col justify-center items-center  gap-12">
      <h2 className="text-7xl font-semibold mx-1 leading-tight">春暖⁠映新色。</h2>
      <p className="text-3xl ">選購最新款錶帶</p>
    </div>
    <div className="basis-1/2 -ml-8 m-auto">
      <Image
        priority
        src="/watch/watch-home.png"
        alt="header image"
        layout="responsive"
        height={680}
        width={1440}
      />
    </div>
  </div>
);

const Watch: FunctionComponent = () => {
  return (
    <div className="w-full">
      <Headblock />
      <h2
        className="text-5xl font-semibold tracking-normal pb-16 pt-24 text-center"
        data-analytics-section="Mac 精選配件"
      >
        Apple Watch 精選配件
      </h2>
      <ProductList type="watch" />
    </div>
  );
};

export default Watch;
