"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/xstate/provider";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalAmount = CartContext.useSelector(
    (state) => state.context.totalAmount
  );
  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl w-10/12 md:w-6/12 flex flex-wrap justify-evenly items-center mx-auto py-4 ">
        <Link href="/" className="flex items-center md:grow-0 grow">
          <Image
            src="/svg/appleLogo.svg"
            priority
            width={14}
            height={44}
            alt="appleLogo"
          />
        </Link>
        <Link href="/cart" className="md:order-last relative">
          <Image
            src="/svg/appleBag.svg"
            height={25}
            width={25}
            alt=""
            className=""
          />
          <div
            className={`${
              totalAmount ? "" : "hidden"
            } absolute  -bottom-1 -right-2 bg-black rounded-full flex justify-center items-center`}
          >
            <span
              className={`${
                totalAmount > 9 ? "text-xs py-1 px-[2px]" : "px-2"
              }  text-white`}
            >
              {totalAmount > 99 ? `99+` : totalAmount}
            </span>
          </div>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block  grow md:w-auto ${
            isMenuOpen ? "" : "hidden "
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col pl-0 p-4 md:p-0 mt-4 rounded-lg md:flex-row md:justify-evenly  md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                href="/"
                className="block  py-2  pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                商店
              </Link>
            </li>

            <li>
              <Link
                href="/mac"
                className="block py-2 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Mac
              </Link>
            </li>
            <li>
              <Link
                href="/ipad"
                className="block py-2  pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                iPad
              </Link>
            </li>
            <li>
              <Link
                href="/iphone"
                className="block py-2  pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                iPhone
              </Link>
            </li>
            <li>
              <Link
                href="/watch"
                className="block py-2  pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Watch
              </Link>
            </li>
            <li>
              <a
                href="https://support.apple.com/zh-tw"
                target="_blank"
                className="block py-2  pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                支援服務
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
