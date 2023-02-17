type AddAction = { type: 'goods/ADD'; payload: number; };
type TakeAction = { type: 'goods/TAKE'; payload: number; };
type ClearAction = { type: 'goods/CLEAR' };

type Action = AddAction | TakeAction | ClearAction;

const add = (value: number): AddAction => ({ type: 'goods/ADD', payload: value, });
const take = (value: number): TakeAction => ({ type: 'goods/TAKE', payload: value, });
const clear = (): ClearAction => ({ type: 'goods/CLEAR' });

export const actions = { add, take, clear };

const goodsReducer = (goods = [], action: Action) => {
  return goods;
};

export default goodsReducer;
