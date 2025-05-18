import { FunctionComponent } from 'react';

import getFormattedPrice from '../helper/getFormattedPrice';

interface PriceInfoProps {
  price: number;
}

const PriceInfo: FunctionComponent<PriceInfoProps> = ({ price }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl font-normal ">NT{getFormattedPrice(price)}</span>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.apple.com/tw/shop/financing/installments/overlay?ca=1790.00&product=MPPJ3FE/A"
        className="text-xl font-normal text-[#06c]"
      >
        0 利率分期付款，每月 NT$149 起，共 12 個月
      </a>
    </div>
  );
};

export default PriceInfo;
