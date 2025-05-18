'use client';

import { FunctionComponent, ChangeEvent } from 'react';

import { CartContext } from '@/xstate/provider';

import { allProducts } from '../components/allProducts';
import getFormattedPrice from '../helper/getFormattedPrice';

import CartProduct from './CartProduct';

const product: { price: string; quantity: number }[] = [];

const RenderProduct: FunctionComponent = () => {
  const cart = CartContext.useSelector((state) => state.context.productList);
  const cartKeys = Object.keys(cart);
  const { send } = CartContext.useActorRef();

  const handleProductCountChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
    id: string,
    color: string,
  ) => {
    // 將用戶輸入的數量轉換成數字
    const count = Number(event.target.value);

    // 確保數量不會小於 1，若用戶輸入數量小於1，只顯示最小值1
    const number: number = count < 1 ? 1 : count;
    send({ type: 'CHANGE_PRODUCT_COUNT', id, color: color || 'noColor', number });
  };

  return (
    <div className="pt-24">
      {cartKeys.map((id) => {
        // 找到對應 id 的產品資料
        const foundProduct = allProducts.find((item) => item.id === id);

        // 解構購物車中產品的資料，取得總數量及其他屬性
        const { total, ...otherProps } = cart[id];

        // 如果產品的總數量大於 0，且找到了對應的產品資料
        if (cart[id].total > 0 && foundProduct) {
          console.log('other', otherProps, 'noColor' in otherProps);
          console.log('foundProduct', foundProduct);
          if ('noColor' in otherProps) {
            // 將產品的stripeKey與數量push到product中，在cashout時使用
            // price與quantity為stripe checkout必要的的key名稱
            console.log('TTTTTTTUR');
            product.push({
              price: foundProduct.stripeKey as string,
              quantity: total,
            });
            // 產品沒有顏色選項，顯示產品名稱及總數量
            return (
              <CartProduct
                key={id}
                name={foundProduct.name}
                imgSrc={foundProduct.src.noColor[0]}
                count={otherProps.noColor}
                price={getFormattedPrice(foundProduct.price * otherProps.noColor)}
                id={id}
                handleProductCountChange={handleProductCountChange}
              />
            );
          }
          // 產品有顏色選項，顯示每個顏色選項的名稱及數量
          const colorOptions = Object.entries(cart[id]).filter(([key]) => key !== 'total');
          return colorOptions.map(([color, count]) => {
            // 將產品的stripeKey與數量push到product中，在cashout時使用
            // price與quantity為stripe checkout必要的的key名稱
            const stripeKey = foundProduct.stripeKey as {
              [key: string]: string;
            };
            product.push({ price: stripeKey[color], quantity: count });

            return (
              <CartProduct
                key={color}
                name={`${foundProduct.name} - ${color}`}
                imgSrc={foundProduct.src[color][0]}
                color={color}
                price={getFormattedPrice(foundProduct.price * count)}
                count={count}
                id={id}
                handleProductCountChange={handleProductCountChange}
              />
            );
          });
        }
      })}
    </div>
  );
};

export default RenderProduct;
