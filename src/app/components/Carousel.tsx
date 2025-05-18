import Image from 'next/image';
import React, { useState } from 'react';

interface CarouselPorps {
  src: { [key: string]: string[] };
  selectedColor: string | null;
}

const Carousel: React.FC<CarouselPorps> = ({ src, selectedColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeImage = (index: number) => {
    setCurrentIndex(index);
  };

  const renderCarouselImages = (images: string[]) => (
    <>
      <div key={currentIndex} className="animate-fade animate-once animate-duration-[500ms]">
        <Image
          src={images[currentIndex]}
          height={550}
          width={550}
          alt=""
          className="object-fill m-auto max-w-5xl max-h-5xl w-[300px] h-[300px] sm:w-[550px] sm:h-[550px]"
        />
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            width={70}
            height={70}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleChangeImage(index)}
            className={`${currentIndex === index ? 'pb-2 border-b-[3px] border-[#b1b1b2]' : ''}`}
          />
        ))}
      </div>
    </>
  );

  if (Object.keys(src)[0] === 'noColor') {
    return renderCarouselImages(src.noColor);
  }

  if (selectedColor && src[selectedColor]) {
    return renderCarouselImages(src[selectedColor]);
  }

  return null;
};

export default Carousel;
