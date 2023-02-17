import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { actions } from '../features/amount';

export const Amount = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const amount = useSelector<RootState>(state => state.amount);

  const add = (value: number) => dispatch(actions.add(value));
  const take = (value: number) => dispatch(actions.take(value));
  const clear = () => dispatch(actions.clear());

  return (
    <h2 className="amount">
      <span>Amount: {amount}</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};
