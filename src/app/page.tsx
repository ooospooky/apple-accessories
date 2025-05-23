import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { iconProduct, IconProductProps } from './components/iconproduct';
import SliderComponent from './components/Slider';

const HeaderBlock: FunctionComponent = () => (
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
        height={400}
        width={900}
      />
    </div>
  </div>
);

const BreakLine: FunctionComponent = () => (
  <div className="mx-auto my-20 border-t border-[#d2d2d7] " />
);

const IconDisplay: FunctionComponent<IconProductProps> = ({ product, src, alt }) => (
  <li className="outline-none text-center w-48">
    <Link href={`/${alt}`}>
      <div className="m-0 align-middle p-8 inline-block relative rounded-full border-2 border-solid border-[#d2d2d7]">
        <Image
          className="rf-browser-itemicon w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]"
          src={src}
          width={75}
          height={75}
          alt={alt}
        />
      </div>
      <br />
      <span className="text-base leading-normal font-normal text-gray-900 overflow-hidden align-text-top inline-block text-center mt-4">
        {product}
      </span>
    </Link>
  </li>
);

const Home: FunctionComponent = () => {
  return (
    <main>
      <HeaderBlock />
      <div className="lg:mx-96">
        <BreakLine />
        <div className="container w-full h-full mt-8 mx-auto">
          <ul className="m-0 p-0 text-center flex justify-around ">
            {iconProduct.map(({ product, src, alt }) => (
              <IconDisplay key={product} product={product} src={src} alt={alt} />
            ))}
          </ul>
        </div>
        <BreakLine />
      </div>
      <div className="w-9/12 m-auto">
        <SliderComponent />
      </div>
    </main>
  );
};

export default Home;
