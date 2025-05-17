import { createMachine, assign } from 'xstate';
import { allProducts } from '@/app/components/allProducts';

interface ProductList {
  [id: string]: {
    total: number;
    [color: string]: number;
  };
}

interface CartContext {
  productList: ProductList;
  totalAmount: number;
}

type CartEvents =
  | { type: 'ADD_TO_CART'; id: string; color: string }
  | { type: 'CHANGE_PRODUCT_COUNT'; id: string; color: string; number: number }
  | { type: 'DELETE_FROM_CART'; id: string; color: string };

// init productList : {1:{total:0},2:{total:0},.....}
const getInitialProductList = (): ProductList => {
  return allProducts.reduce((obj: ProductList, item) => {
    obj[item.id] = { total: 0 };
    return obj;
  }, {});
};

const initialContext: CartContext = {
  productList: getInitialProductList(),
  totalAmount: 0,
};

const cartMachine = createMachine(
  {
    types: {
      context: {} as CartContext,
      events: {} as CartEvents,
    },
    id: 'cart',
    initial: 'idle',
    context: initialContext,
    states: {
      idle: {
        on: {
          ADD_TO_CART: {
            actions: 'addToCart',
          },
          CHANGE_PRODUCT_COUNT: {
            actions: 'changeProductCount',
          },
          DELETE_FROM_CART: {
            actions: 'deleteFromCart',
          },
        },
      },
    },
  },
  {
    actions: {
      addToCart: assign(({ context, event }) => {
        if (event.type === 'ADD_TO_CART') {
          const { id, color } = event;
          const updatedProductList = { ...context.productList };
          updatedProductList[id][color] = (updatedProductList[id][color] || 0) + 1;
          updatedProductList[id].total += 1;

          return {
            productList: updatedProductList,
            totalAmount: context.totalAmount + 1,
          };
        }
        return context;
      }),

      changeProductCount: assign(({ context, event }) => {
        if (event.type === 'CHANGE_PRODUCT_COUNT') {
          const { id, color, number } = event;
          const updatedProductList = { ...context.productList };
          const prevNumber = updatedProductList[id][color] || 0;
          const numberDiff = number - prevNumber;
          // total:2 black:2
          // total:? black:7  加上兩者的差即為新的產品數量
          updatedProductList[id][color] = number;
          updatedProductList[id].total += numberDiff;

          return {
            productList: updatedProductList,
            totalAmount: context.totalAmount + numberDiff,
          };
        }
        return context;
      }),

      deleteFromCart: assign(({ context, event }) => {
        if (event.type === 'DELETE_FROM_CART') {
          const { id, color } = event;
          const updatedProductList = { ...context.productList };
          const prevNumber = updatedProductList[id][color] || 0;

          delete updatedProductList[id][color]; //移除該顏色的key
          updatedProductList[id].total -= prevNumber;

          return {
            productList: updatedProductList,
            totalAmount: context.totalAmount - prevNumber,
          };
        }
        return context;
      }),
    },
  },
);

export default cartMachine;
