import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow py-16  dark:bg-[#f5f5f7]">
      <div className="w-8/12 mx-auto grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 pb-10 ">
        <div>
          <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-3">
            <li className="mb-4">
              <p className="text-black ">選購與了解產品</p>
            </li>
            <li>
              <Link href="/mac" className="hover:underline">
                Mac
              </Link>
            </li>
            <li>
              <Link href="/iphone" className="hover:underline">
                iPhone
              </Link>
            </li>
            <li>
              <Link href="/iPad" className="hover:underline">
                iPad
              </Link>
            </li>
            <li>
              <Link href="/watch" className="hover:underline">
                Apple Watch
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-3">
            <li className="mb-4">
              <p className="text-black ">Apple 價值</p>
            </li>
            <li>
              <a
                href="https://www.apple.com/tw/accessibility/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer noopener"
              >
                輔助使用
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/tw/environment/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer noopener"
              >
                環境
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/tw/privacy/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer noopener"
              >
                隱私權
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/tw/supplier-responsibility/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer noopener"
              >
                供應商責任
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-3">
            <li className="mb-4">
              <p className="text-black ">關於Apple</p>
            </li>
            <li>
              <a
                href="https://www.apple.com/tw/leadership/"
                target="_blank"
                className="hover:underline "
                rel="noreferrer noopener"
              >
                Apple 領導團隊
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/careers/tw/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer noopener"
              >
                工作機會
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/compliance/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer noopener"
              >
                商業倫理與法規遵循
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/tw/contact/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer noopener"
              >
                與Apple聯絡
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-8/12   max-w-screen-xl pb-3 md:flex md:items-center  m-auto md:justify-between">
        <span className="text-sm text-[#6e6e73] sm:text-center ">
          Copyright © 2023 Apple Inc. 保留一切權利。
        </span>
        <ul className="flex flex-wrap items-center mt-8 text-sm font-medium text-gray-500 dark:text-gray-400 md:mt-0">
          <li>
            <a
              href="https://www.apple.com/legal/privacy/tzh/"
              target="_blank"
              rel="noreferrer noopener"
              className=" hover:underline  pr-3 border-r border-[#6e6e73]"
            >
              隱私權政策
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/tw/legal/internet-services/terms/site.html"
              className=" hover:underline  px-3 border-r border-[#6e6e73]"
            >
              使用條款
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/tw/shop/open/salespolicies"
              className=" hover:underline  px-3 border-r border-[#6e6e73]"
            >
              銷售與退款
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/tw/sitemap/" className=" hover:underline  px-3 ">
              網站地圖
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
