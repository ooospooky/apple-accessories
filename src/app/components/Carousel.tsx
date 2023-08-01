import React, { useState } from 'react'
import Image from 'next/image'

interface CarouselPorps {
  src: { [key: string]: string[] };
  selectedColor: string | null;
}

export const Carousel: React.FC<CarouselPorps> = ({ src, selectedColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (Object.keys(src)[0] === 'noColor') {
    return (
      <>
        <div key={currentIndex} className='animate-fade animate-once animate-duration-[500ms] '>
          <Image src={src.noColor[currentIndex]} layout="responsive" height={1} width={1} alt='' className='object-fill m-auto max-w-5xl max-h-5xl' />
        </div>
        <div className=' w-full flex flex-row justify-center items-center'>
          {src.noColor.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={70}
              height={70}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`${currentIndex === index ? 'pb-2 border-b-[3px] border-[#b1b1b2]' : ""}`}
            />
          ))}
        </div>
      </>
    )
  }
  if (selectedColor) {
    return (
      <>
        <div key={currentIndex} className='animate-fade animate-once animate-duration-[500ms] '>
          <Image src={src[selectedColor][currentIndex]} layout="responsive" height={1} width={1} alt='' className='object-fill m-auto max-w-5xl max-h-5xl ' />
        </div>
        <div className=' w-full flex flex-row justify-center items-center   '>
          {src[selectedColor].map((image, index) => (
            <Image
              key={index}
              src={image}
              width={70}
              height={70}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`${currentIndex === index ? 'pb-2 border-b-[3px] border-[#b1b1b2]' : ""}`}
            />
          ))}
        </div>
      </>
    )
  } else {
    return null;
  }
}