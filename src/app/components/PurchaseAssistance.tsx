import React from 'react';
import Image from 'next/image';

export const PurchaseAssistance = () => {
  return (
    <div className="w-full pt-12 border-t border-gray-400 flex flex-row items-center whitespace-nowrap ">
      <Image src="/svg/chat.svg" priority width={25} height={25} alt="chat" className="mr-3" />
      <span className="text-base font-semibold">購買時取得協助。</span>
      <a
        target="_blank"
        href="https://contactretail.apple.com/Help"
        className="text-base text-[#06c]"
      >
        立即與我們交流
      </a>
      <span className="text-base font-normal">或致電 0800-020-021。</span>
    </div>
  );
};
