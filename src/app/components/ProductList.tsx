import React from 'react'
import { allProducts } from './allProducts'
import { ProductCard } from './ProductCard'
interface IproductList {
  type: string
}
export const ProductList: React.FC<IproductList> = ({ type }) => {
  return (
    <div className='w-8/12 m-auto '>
      <ul className="w-full flex flex-wrap m-0 mb-20">
        {allProducts.map((product, index) => (
          <ProductCard key={index} {...product} productIndex={index + 1} />
        ))}
      </ul>
    </div>
  )
}
