import React from 'react'
import { allProducts } from './allProducts'
import { ProductCard } from './ProductCard'
interface IproductList {
  type: string
}
export const ProductList: React.FC<IproductList> = ({ type }) => {
  return (
    <div className='w-full md:w-9/12 m-auto '>
      <ul className="w-full flex flex-wrap  m-0 mb-20">
        {allProducts.map((product) => (
          product.category === type ? <ProductCard key={product.id} {...product} /> : null
        ))}
      </ul>
    </div>
  )
}
