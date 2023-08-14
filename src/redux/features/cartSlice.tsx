import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { allProducts } from '@/app/components/allProducts'

interface IinitialState {
  value: IproductList,
  totalAmount: number
}

interface IproductList {
  [id: string]: {
    total: number;
    [color: string]: number;
  };
}

// loop allProducts to get init productList : {1:{total:0},2:{total:0},.....}

const getInitialState = () => {
  const productList: IproductList = allProducts.reduce((obj: IproductList, item) => {
    obj[item.id] = { total: 0 };
    return obj;
  }, {})
  return productList;
}

let initialState: IinitialState = { value: getInitialState(), totalAmount: 0 }


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addToCart: (state, action: PayloadAction<{ id: string; color: string; }>) => {
      const { id, color } = action.payload;
      state.value[id][color] = (state.value[id][color] || 0) + 1;
      state.value[id].total += 1;
      state.totalAmount += 1;
    },
    changeProductCount: ((state, action: PayloadAction<{ id: string; color: string; number: number; }>) => {
      const { id, color, number } = action.payload;
      let numberDiff = number - state.value[id][color]
      state.value[id][color] = state.value[id][color] + numberDiff;
      state.value[id].total += numberDiff;
      state.totalAmount += numberDiff;
      // total:2 black:2
      // total:? black:7  加上兩者的差即為新的產品數量
    }),
    deleteFromCart: (state, action: PayloadAction<{ id: string; color: string; }>) => {
      const { id, color } = action.payload;
      const prevNumber = state.value[id][color]
      delete state.value[id][color];  //移除該顏色的key
      state.value[id].total -= prevNumber;
      state.totalAmount -= prevNumber;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, changeProductCount, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer