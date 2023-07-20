import Image from 'next/image'
import { iconProduct } from './components/iconproduct'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="containter  ">
      <div className='headblock w-full h-full flex flex-row bg-[#f0eff2] '  >
        <div className="info basis-1/2 flex flex-col justify-center items-center  gap-12" >
          <h2 className="text-5xl">MagSafe。混‍搭，很⁠搭。</h2>
          <p className='text-2xl'>保護殼、卡套、無線充電器，或行動電源，全都可貼合。</p>
        </div>
        <div className='basis-1/2 ' >
          <Image src="/apple-homepage.jpg" alt="Homepage-IMG" height={500} width={500} />
        </div>
      </div>
      <div className='mx-96'>
        <div className="borderline my-20 border-t border-solid border-[#d2d2d7] "></div>

        <div className="container w-full h-full mt-8 ">
          <ul className="m-0 p-0 text-center flex justify-around ">
            {iconProduct.map(({ product, src, alt }) => {
              return (
                <li key={product} className='outline-none text-center w-48'>
                  <Link href={`/${alt}`}>
                    <div className="m-0 align-middle p-8 inline-block relative rounded-full border-2 border-solid border-[#d2d2d7]">
                      <Image className="rf-browser-itemicon" src={src} width={75} height={75} alt={alt} />
                    </div>
                    <span className="text-base leading-normal font-normal text-gray-900 overflow-hidden align-text-top inline-block text-center mt-4">{product}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="borderline my-20 border-t border-solid border-[#d2d2d7]"></div>
      </div>
    </main>
  )
}
