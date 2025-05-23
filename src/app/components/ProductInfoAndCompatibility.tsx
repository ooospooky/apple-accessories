import Image from 'next/image';
import React, { useState } from 'react';

interface ProductInfoAndCompatibilityProps {
  productInfo: string[] | undefined;
  // eslint-disable-next-line react/require-default-props
  compatibilityInfo?: string[];
}

const ProductInfoAndCompatibility: React.FC<ProductInfoAndCompatibilityProps> = ({
  productInfo,
  compatibilityInfo,
}) => {
  const [productInfoDropdownOpen, setProductInfoDropdownOpen] = useState(true);
  const [compatibilityInfoDropdownOpen, setCompatibilityInfoDropdownOpen] = useState(false);
  const infoKey = ['概覽', '包裝盒內容', '技術規格', '系統需求'];
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setProductInfoDropdownOpen(!productInfoDropdownOpen)}
          className="flex flex-row content-center justify-between w-full py-12 border-t border-[#d2d2d7]"
        >
          <span className="text-6xl font-semibold">產品資訊</span>
          <Image src="/svg/chevrondown.svg" width={32} height={35} alt="chevrondown" />
        </button>
        {productInfoDropdownOpen && (
          <div className="sm:animate-fade-down  w-full ">
            {productInfo?.map((infoDescription, index) => {
              const isLastItem = index === productInfo.length - 1;
              return (
                <div
                  className="Overview-panel flex  flex-col md:flex-row py-12"
                  key={infoDescription}
                >
                  <div className="basis-3/12 text-5xl font-semibold pb-12">{infoKey[index]}</div>
                  <div
                    className={`basis-9/12 text-2xl font-normal leading-10 pb-12 ${isLastItem ? '' : 'border-b border-[#d2d2d7]'}`}
                    dangerouslySetInnerHTML={{ __html: infoDescription }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      {compatibilityInfo && (
        <div>
          <button
            type="button"
            onClick={() => setCompatibilityInfoDropdownOpen(!compatibilityInfoDropdownOpen)}
            className="flex flex-row content-center justify-between w-full py-12 border-t border-[#d2d2d7]"
          >
            <span className="text-6xl font-semibold">相容性</span>
            <Image src="/svg/chevrondown.svg" width={32} height={35} alt="chevrondown" />
          </button>
          {compatibilityInfoDropdownOpen && (
            <div className="sm:animate-fade-down  w-full ">
              <div className="Overview-panel flex flex-col md:flex-row py-12">
                <div className="basis-3/12 text-5xl font-semibold pb-12" />
                <div className="basis-9/12 text-2xl font-normal leading-10 pb-12 flex flex-row gap-20 ">
                  {compatibilityInfo.map((info: string) => {
                    return (
                      <span
                        key={info}
                        className="mr-12"
                        dangerouslySetInnerHTML={{ __html: info }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductInfoAndCompatibility;
