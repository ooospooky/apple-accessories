"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
{/* <Link href="https://flowbite.com/" className="flex items-center">
          <Image src='/svg/appleLogo.svg' priority width={14} height={44} alt="appleLogo" />
        </Link> */}
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl w-5/12 flex flex-wrap justify-evenly items-center mx-auto py-4 ">
        <Link href="https://flowbite.com/" className="flex items-center">
          <Image src='/svg/appleLogo.svg' priority width={14} height={44} alt="appleLogo" />
        </Link>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden '}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8  md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">商店</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">Mac</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">Ipad</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">Iphone</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">Watch</a>
            </li>
            <li>
              <a href="https://support.apple.com/zh-tw" target='_blank' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">支援服務</a>
            </li>

          </ul>

        </div>
        <Link href='/cart' className=''>
          <Image src='/svg/appleBag.svg' height={25} width={25} alt='' />
        </Link>
      </div>
    </nav>
  );
};  