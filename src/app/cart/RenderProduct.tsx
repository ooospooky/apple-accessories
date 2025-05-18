'use client';

import { FunctionComponent, ChangeEvent, useCallback } from 'react';

import { CartContext } from '@/xstate/provider';

import { allProducts } from '../components/allProducts';
import getFormattedPrice from '../helper/getFormattedPrice';

import CartProduct from './CartProduct';

const RenderProduct: FunctionComponent = () => {
  const cart = CartContext.useSelector((state) => state.context.productList);
  const cartKeys = Object.keys(cart);
  const { send } = CartContext.useActorRef();

  const handleProductCountChange = useCallback(
    (
      event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
      id: string,
      color: string,
    ) => {
      // 將用戶輸入的數量轉換成數字
      const count = Number(event.target.value);

      // 確保數量不會小於 1，若用戶輸入數量小於1，只顯示最小值1
      const number: number = count < 1 ? 1 : count;
      send({ type: 'CHANGE_PRODUCT_COUNT', id, color: color || 'noColor', number });
    },
    [send],
  );

  const renderItems = cartKeys.flatMap((id) => {
    const foundProduct = allProducts.find((item) => item.id === id);
    if (!foundProduct || cart[id].total <= 0) return [];

    const { total, ...otherProps } = cart[id];

    if ('noColor' in otherProps) {
      return [
        <CartProduct
          key={id}
          name={foundProduct.name}
          imgSrc={foundProduct.src.noColor[0]}
          count={otherProps.noColor}
          price={getFormattedPrice(foundProduct.price * otherProps.noColor)}
          id={id}
          handleProductCountChange={handleProductCountChange}
        />,
      ];
    }

    const colorOptions = Object.entries(cart[id]).filter(([key]) => key !== 'total');
    return colorOptions.map(([color, count]) => (
      <CartProduct
        key={`${id}-${color}`}
        name={`${foundProduct.name} - ${color}`}
        imgSrc={foundProduct.src[color][0]}
        color={color}
        price={getFormattedPrice(foundProduct.price * count)}
        count={count}
        id={id}
        handleProductCountChange={handleProductCountChange}
      />
    ));
  });

  return <div className="pt-24">{renderItems}</div>;
};

export default RenderProduct;
