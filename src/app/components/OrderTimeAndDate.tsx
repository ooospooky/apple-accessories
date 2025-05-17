import React from 'react';
import Image from 'next/image';
import getNextTwoDays from '../helper/getNextTwoDays';

interface IorderTimeAndDate {
  flexDirection: string;
}

export const OrderTimeAndDate: React.FC<IorderTimeAndDate> = ({ flexDirection }) => {
  return (
    <div className={`flex ${flexDirection} gap-10`}>
      <div className={`flex flex-row gap-1  ${flexDirection === 'flex-row' ? 'w-1/2' : ''}`}>
        <Image
          src="/svg/appleBag.svg"
          priority
          width={25}
          height={25}
          alt="appleBag"
          className="mr-3"
        />
        <div className="flex flex-col gap-1">
          <span className="text-xl font-normal">立即訂購。店內取貨：</span>
          <span className="text-xl font-normal">
            <span className="text-xl font-semibold">今天</span>，地點：Apple 台北 101
          </span>
        </div>
      </div>
      <div className={`flex flex-row gap-1  ${flexDirection === 'flex-row' ? 'w-1/2' : ''}`}>
        <Image
          src="/svg/boxtruck.svg"
          priority
          width={25}
          height={25}
          alt="truck"
          className="mr-3"
        />
        <div className="flex flex-col gap-1">
          <span className="text-xl font-normal">今天訂購。 運送至您所在的地方</span>
          <span className="text-xl font-semibold">{getNextTwoDays()} — 免額外付費</span>
        </div>
      </div>
    </div>
  );
};
