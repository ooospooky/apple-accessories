"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { allProducts, IProduct } from "../components/allProducts";
import getFormattedPrice from "../helper/getFormattedPrice";
import { OrderTimeAndDate } from "../components/OrderTimeAndDate";
import QuantityField from "../components/QuantityField";
import checkout from "../../api/checkout";
import LoadingSvg from "@/app/components/loadingSvg";
import { CartContext } from "@/xstate/provider";
import cartMachine from "@/xstate/cartMachine";

export default function Cart() {
  const [isLoading, setIsLoading] = useState(false);
  const { send } = CartContext.useActorRef();
  const cart = CartContext.useSelector((state) => state.context.productList);
  const [totalPrice, setTotalPrice] = useState(0);
  //取得購物車中產品的 id 陣列
  const keys = Object.keys(cart);

  //創建product，計算要送入stripe的資料 [{price:stripeAPI,quantity,數量}]
  let product: { price: string; quantity: number }[] = [];

  // 在需要時更新 totalPrice
  useEffect(() => {
    const calculateTotalPrice = () => {
      // 使用 reduce 函數來計算總價格
      return keys.reduce((total, id) => {
        // 找到對應的產品
        const foundProduct = allProducts.find((item) => item.id === id);
        // 如果產品存在且購物車中的數量大於 0，則加總到 total 中
        if (cart[id]["total"] > 0 && foundProduct) {
          return total + foundProduct.price * cart[id]["total"];
        }
        // 否則保持原本的 total 值
        return total;
      }, 0);
    };
    setTotalPrice(calculateTotalPrice());
  }, [cart, keys]);

  //更改商品數量邏輯
  const handleProductCountChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
    id: string,
    color: string
  ) => {
    // 將用戶輸入的數量轉換成數字
    const count = Number(event.target.value);

    //確保數量不會小於 1，若用戶輸入數量小於1，只顯示最小值1
    const number: number = count < 1 ? 1 : count;
    send({ type: "CHANGE_PRODUCT_COUNT", id, color, number });
  };

  //按下結帳按鈕後顯示loadingSvg，使用setTimeout來避免UI loadingSvg不立即更新
  const handleCashout = () => {
    setIsLoading(true);
    setTimeout(() => {
      checkout(product);
    }, 100);
  };

  const CartHeader = () => {
    const cartItemsText = `以下是你購物袋內的商品 ${getFormattedPrice(
      totalPrice
    )}。`;
    const shippingText = "所有訂單均享免額外付費運送服務。";

    return (
      <div className="w-full pb-16 border-b border-[#d2d2d7] text-center">
        <h1 className="block text-5xl md:text-6xl tracking-normal leading-normal font-semibold">
          {cartItemsText}
        </h1>
        <span className="block text-2xl font-normal pt-10">{shippingText}</span>
        <div className="mt-12 w-1/3 m-auto">
          <button
            onClick={() => handleCashout()}
            className="w-full inline-block mt-12 px-12 py-6 rounded-xl cursor-pointer text-center whitespace-no-wrap text-2xl font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white"
          >
            {isLoading ? <LoadingSvg /> : "結帳"}
          </button>
        </div>
      </div>
    );
  };

  interface NoColorOptionProductProps {
    total: number;
    otherProps: { [color: string]: number }; // 根據需要調整類型
    foundProduct: IProduct;
    id: string;
    handleProductCountChange: (
      event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
      id: string,
      color: string
    ) => void;
  }

  const NoColorOptionProduct: React.FC<NoColorOptionProductProps> = ({
    total,
    otherProps,
    foundProduct,
    id,
    handleProductCountChange,
  }) => {
    const { send } = CartContext.useActorRef();

    return (
      <div key={id}>
        <div className="pb-24 mb-24 border-b border-[#d2d2d7]">
          <div className="w-full flex flex-col md:flex-row">
            <div className="mx-auto md:basis-1/4">
              <Image
                src={foundProduct.src["noColor"][0]}
                alt=""
                height={400}
                width={400}
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
              />
            </div>
            <div className="basis-3/4">
              <div className="h-full flex flex-col justify-center ">
                <div className=" h-1/2  my-4 mt-3 flex flex-row text-3xl  md:text-4xl font-semibold">
                  <div className="basis-6/12 pr-10">
                    <Link
                      className="hover:text-[#0071e3] tracking-normal leading-normal"
                      href={`/product/${foundProduct.id}`}
                    >
                      {foundProduct.name}
                    </Link>
                  </div>
                  <div className="basis-2/12">
                    <QuantityField
                      count={otherProps["noColor"]}
                      id={id}
                      color={"noColor"}
                      handleProductCountChange={handleProductCountChange}
                    />
                  </div>
                  <div className="basis-4/12 flex flex-col items-end gap-5">
                    {getFormattedPrice(
                      foundProduct.price * otherProps["noColor"]
                    )}
                    <button
                      className="text-2xl text-[#4182c3] font-normal hover:underline"
                      onClick={() =>
                        send({ type: "DELETE_FROM_CART", id, color: "noColor" })
                      }
                    >
                      移除
                    </button>
                  </div>
                </div>
                <div className="h-1/2 pt-7 border-t border-[#d2d2d7]">
                  <OrderTimeAndDate flexDirection="flex-row" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  interface ColorOptionProductProps {
    color: string;
    count: number;
    foundProduct: IProduct;
    id: string;
    handleProductCountChange: (
      event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
      id: string,
      color: string
    ) => void;
  }

  const ColorOptionProduct: React.FC<ColorOptionProductProps> = ({
    color,
    count,
    foundProduct,
    id,
    handleProductCountChange,
  }) => {
    return (
      <div key={color} className="pb-24 mb-24 border-b border-[#d2d2d7]">
        <div className="w-full flex flex-col md:flex-row">
          <div className="mx-auto md:basis-1/4">
            <Image
              src={foundProduct.src[color][0]}
              alt=""
              height={400}
              width={400}
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            />
          </div>
          <div className="basis-3/4">
            <div className="h-full flex flex-col justify-center ">
              <div className=" h-1/2  my-4 mt-3 flex flex-row text-3xl  md:text-4xl font-semibold">
                <div className="basis-6/12 pr-10">
                  <Link
                    className="hover:text-[#0071e3] tracking-normal leading-normal "
                    href={`/product/${foundProduct.id}`}
                  >
                    {" "}
                    {foundProduct.name} - {color}{" "}
                  </Link>
                </div>
                <div className="basis-2/12">
                  <QuantityField
                    count={count}
                    id={id}
                    color={color}
                    handleProductCountChange={handleProductCountChange}
                  />
                </div>
                <div className="basis-4/12 flex flex-col items-end gap-5">
                  {getFormattedPrice(foundProduct.price * count)}
                  <button
                    className="text-2xl text-[#4182c3] font-normal hover:underline"
                    onClick={() =>
                      send({ type: "DELETE_FROM_CART", id, color })
                    }
                  >
                    移除
                  </button>
                </div>
              </div>
              <div className="h-1/2 pt-7 border-t border-[#d2d2d7]">
                <OrderTimeAndDate flexDirection="flex-row" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RenderProduct = () => {
    return (
      <div className="pt-24">
        {keys.map((id) => {
          // 找到對應 id 的產品資料
          const foundProduct = allProducts.find((item) => item.id === id);

          // 解構購物車中產品的資料，取得總數量及其他屬性
          const { total, ...otherProps } = cart[id];

          // 如果產品的總數量大於 0，且找到了對應的產品資料
          if (cart[id].total > 0 && foundProduct) {
            if ("noColor" in otherProps) {
              // 將產品的stripeKey與數量push到product中，在cashout時使用
              //price與quantity為stripe checkout必要的的key名稱
              product.push({
                price: foundProduct.stripeKey as string,
                quantity: total,
              });
              // 產品沒有顏色選項，顯示產品名稱及總數量
              return (
                <NoColorOptionProduct
                  key={id}
                  total={total}
                  otherProps={otherProps}
                  foundProduct={foundProduct}
                  id={id}
                  handleProductCountChange={handleProductCountChange}
                />
              );
            } else {
              // 產品有顏色選項，顯示每個顏色選項的名稱及數量
              const colorOptions = Object.entries(cart[id]).filter(
                ([key, value]) => key !== "total"
              );
              return colorOptions.map(([color, count]) => {
                // 將產品的stripeKey與數量push到product中，在cashout時使用
                //price與quantity為stripe checkout必要的的key名稱
                const stripeKey = foundProduct.stripeKey as {
                  [key: string]: string;
                };
                product.push({ price: stripeKey[color], quantity: count });

                return (
                  <ColorOptionProduct
                    key={color}
                    color={color}
                    count={count}
                    foundProduct={foundProduct}
                    id={id}
                    handleProductCountChange={handleProductCountChange}
                  />
                );
              });
            }
          }
        })}
      </div>
    );
  };

  const Summary = () => (
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

  const CashOut = () => (
    <div className="w-9/12 flex justify-end ml-auto">
      <button
        onClick={() => handleCashout()}
        className="w-1/2 inline-block mt-12 px-12 py-6 rounded-xl cursor-pointer text-center whitespace-no-wrap text-2xl font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white  "
      >
        {" "}
        {isLoading ? <LoadingSvg /> : "結帳"}
      </button>
    </div>
  );

  const Assistance = () => (
    <div className="w-full my-24 py-12 border-y border-gray-400 flex flex-row items-center whitespace-nowrap text-2xl ">
      <span className=" font-semibold">需要進一步協助？</span>
      <a
        target="_blank"
        href="https://contactretail.apple.com/Help"
        className=" text-[#06c]"
      >
        立即與我們交流
      </a>
      <span className=" font-normal">或致電 0800-020-021。</span>
    </div>
  );

  //購物車沒有商品時呈現其他畫面
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
        <Assistance />
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
            <Link
              href="/"
              className="text-2xl text-[#4182c3] font-normal hover:underline  mx-auto"
            >
              選購 &gt;
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <div className="h-full  w-11/12 lg:w-8/12 m-auto my-20">
      <CartHeader />
      <RenderProduct />
      <Summary />
      <CashOut />
      <p className="text-right text-2xl pt-5 ">
        {" "}
        Use test card 4242 4242 4242 4242 to simulate a payment, other fields
        can be entered freely
      </p>
      <Assistance />
    </div>
  );
}
