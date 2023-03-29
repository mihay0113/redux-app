import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (goods, action: PayloadAction<string>) => {
      if (goods.some(good => good === action.payload)) {
        return goods;
      } else {
        goods.push(action.payload);
      }
    },
    take: (goods, action: PayloadAction<string>) => {
      return goods.filter(good => good !== action.payload);
    },
    clear: () => [],
  }
});
        
export default goodsSlice.reducer;
export const {actions} = goodsSlice;
