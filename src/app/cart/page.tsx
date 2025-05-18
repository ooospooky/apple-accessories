'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useState, useCallback, useMemo } from 'react';

import LoadingSvg from '@/app/components/loadingSvg';
import { CartContext } from '@/xstate/provider';

import checkout from '../../api/checkout';
import { allProducts } from '../components/allProducts';
import getFormattedPrice from '../helper/getFormattedPrice';

import CartHeader from './CartHeader';
import RenderProduct from './RenderProduct';

// 創建product，計算要送入stripe的資料 [{price:stripeAPI,quantity,數量}]
const product: { price: string; quantity: number }[] = [];

const Cart: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cart = CartContext.useSelector((state) => state.context.productList);
  // 取得購物車中產品的 id 陣列
  const keys = Object.keys(cart);

  const totalPrice = useMemo(() => {
    return keys.reduce((total, id) => {
      const foundProduct = allProducts.find((item) => item.id === id);
      if (cart[id].total > 0 && foundProduct) {
        return total + foundProduct.price * cart[id].total;
      }
      return total;
    }, 0);
  }, [cart, keys]);

  // 按下結帳按鈕後顯示loadingSvg，使用setTimeout來避免UI loadingSvg不立即更新
  const handleCashout = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      checkout(product);
    }, 100);
  }, []);

  const Summary = (
    <div className="w-9/12 flex flex-col ml-auto">
      <div className="w-full flex flex-row justify-between text-2xl mb-5">
        <span>小計</span>
        <span>{getFormattedPrice(totalPrice)}</span>
      </div>
      <div className="w-full flex flex-row justify-between text-2xl">
        <span>運費</span>
        <span>免額外付費</span>
      </div>
      <div className="w-full flex flex-row justify-between pt-9 mt-6 border-t border-[#d2d2d7] text-4xl font-semibold">
        <span>你的總金額</span>
        <span>{getFormattedPrice(totalPrice)}</span>
      </div>
      <span className="text-xl text-[#6e6e73] text-right ">
        含加值型營業稅{getFormattedPrice(Math.floor(totalPrice * 0.047))}
      </span>
      <span className="text-xl tracking-wide text-right mt-2 ">
        欲使用銀行轉帳付款，請致電 0800-020-021。
      </span>
    </div>
  );

  const CashOut = (
    <div className="w-9/12 flex justify-end ml-auto">
      <button
        type="button"
        onClick={() => handleCashout()}
        className="w-1/2 inline-block mt-12 px-12 py-6 rounded-xl cursor-pointer text-center whitespace-no-wrap text-2xl font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white  "
      >
        {isLoading ? <LoadingSvg /> : '結帳'}
      </button>
    </div>
  );

  const Assistance = (
    <div className="w-full my-24 py-12 border-y border-gray-400 flex flex-row items-center whitespace-nowrap text-2xl ">
      <span className=" font-semibold">需要進一步協助？</span>
      <a
        target="_blank"
        href="https://contactretail.apple.com/Help"
        className=" text-[#06c]"
        rel="noreferrer noopener"
      >
        立即與我們交流
      </a>
      <span className="font-normal">或致電 0800-020-021。</span>
    </div>
  );

  // 購物車沒有商品時呈現其他畫面
  if (totalPrice <= 0)
    return (
      <div className="h-full w-11/12 md:w-8/12 m-auto my-20">
        <div className="flex flex-col gap-12 items-center md:items-start">
          <h2 className="text-6xl font-semibold">購物袋中沒有任何商品。</h2>
          <p className="text-3xl ">登入查看你已儲存的商品。或繼續選購。</p>
          <Link
            href="/"
            className="w-1/2 inline-block  px-12 py-6 rounded-xl cursor-pointer text-center whitespace-no-wrap text-2xl font-normal bg-[#e6e6e6] hover:bg-[#e4e3e3]  "
          >
            繼續購物
          </Link>
        </div>
        {Assistance}
        <div className="relative">
          <Image
            src="/apple-new-arrivals.jpeg"
            width={980}
            height={400}
            alt="new arrivals"
            className=""
          />
          <div className="absolute w-1/2 inset-0 flex flex-col gap-5 items-start justify-center pl-24 ">
            <h2 className="text-5xl font-semibold  mx-auto">新品上市</h2>
            <p className="text-2xl  mx-auto">查看最新配件。</p>
            <Link href="/" className="text-2xl text-[#4182c3] font-normal hover:underline  mx-auto">
              選購 &gt;
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <div className="h-full  w-11/12 lg:w-8/12 m-auto my-20">
      <CartHeader totalPrice={totalPrice} isLoading={isLoading} handleCashout={handleCashout} />
      <RenderProduct />
      {Summary}
      {CashOut}
      <p className="text-right text-2xl pt-5 ">
        Use test card 4242 4242 4242 4242 to simulate a payment, other fields can be entered freely
      </p>
      {Assistance}
    </div>
  );
};
export default Cart;
