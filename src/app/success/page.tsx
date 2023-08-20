"use client"
import Link from "next/link";
import React, { use, useEffect } from "react";
import { shootFireworks } from '../../lib/utils'

const Success = () => {
  useEffect(() => {
    shootFireworks();
  }, [])
  return (
    <div className=" h-screen w-full ">
      <div className="bg-white p-6  md:mx-auto mt-16">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-36 h-36 mx-auto my-6"
        >
          <path
            fill="green"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-5xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2 text-2xl">
            Thank you for completing your secure online payment.
          </p>
          <div className="py-10 text-center text-2xl">
            <Link
              href="/"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
