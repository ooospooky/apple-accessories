import React, { FunctionComponent } from 'react';

import { allProducts } from './allProducts';
import ProductCard from './ProductCard';

const ProductList: FunctionComponent<{ type: string }> = ({ type }) => {
  // 過濾出符合指定類型的產品
  const filteredProducts = allProducts.filter((product) => product.category === type);

  return (
    <div className="w-full md:w-9/12 m-auto ">
      <ul className="w-full flex flex-wrap  m-0 mb-20">
        {/* 對過濾後的產品進行遍歷，顯示相應的產品卡片 */}
        {filteredProducts.map((product) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
