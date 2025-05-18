'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, ChangeEvent } from 'react';

import { CartContext } from '@/xstate/provider';

import OrderTimeAndDate from '../components/OrderTimeAndDate';
import QuantityField from '../components/QuantityField';

interface CartProductProps {
  imgSrc: string;
  price: string;
  name: string;
  id: string;
  count: number;
  // eslint-disable-next-line react/require-default-props
  color?: string | undefined;
  handleProductCountChange: (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
    id: string,
    color: string,
  ) => void;
}

const CartProduct: FunctionComponent<CartProductProps> = ({
  imgSrc,
  price,
  name,
  count,
  color = 'noColor',
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
              src={imgSrc}
              alt="Product Image"
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
                    href={`/product/${id}`}
                  >
                    {name}
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
                  {price}
                  <button
                    type="button"
                    className="text-2xl text-[#4182c3] font-normal hover:underline"
                    onClick={() => send({ type: 'DELETE_FROM_CART', id, color })}
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

export default CartProduct;
