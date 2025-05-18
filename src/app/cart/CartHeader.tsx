'use client';

import { FunctionComponent } from 'react';

import LoadingSvg from '@/app/components/loadingSvg';

import getFormattedPrice from '../helper/getFormattedPrice';

interface CartHeaderProps {
  totalPrice: number;
  isLoading: boolean;
  handleCashout: () => void;
}

const CartHeader: FunctionComponent<CartHeaderProps> = ({
  totalPrice,
  isLoading,
  handleCashout,
}) => {
  const cartItemsText = `以下是你購物袋內的商品 ${getFormattedPrice(totalPrice)}。`;
  const shippingText = '所有訂單均享免額外付費運送服務。';

  return (
    <div className="w-full pb-16 border-b border-[#d2d2d7] text-center">
      <h1 className="block text-5xl md:text-6xl tracking-normal leading-normal font-semibold">
        {cartItemsText}
      </h1>
      <span className="block text-2xl font-normal pt-10">{shippingText}</span>
      <div className="mt-12 w-1/3 m-auto">
        <button
          type="button"
          onClick={handleCashout}
          className="w-full inline-block mt-12 px-12 py-6 rounded-xl cursor-pointer text-center whitespace-no-wrap text-2xl font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white"
        >
          {isLoading ? <LoadingSvg /> : '結帳'}
        </button>
      </div>
    </div>
  );
};

export default CartHeader;
