import { useDispatch } from 'react-redux';
import DeleteButton from '../../ui/DeleteButton';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function CartItem({ item, showDelete }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  function handleAddQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleRemoveQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <li className="mx-2 py-3 sm:flex sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <div className="flex gap-2 items-center justify-between">
          <Button type="small" onClick={handleRemoveQuantity}>
            -
          </Button>
          {quantity}
          <Button type="small" onClick={handleAddQuantity}>
            +
          </Button>
        </div>
        {showDelete && <DeleteButton pizzaId={pizzaId} />}
      </div>
    </li>
  );
}

export default CartItem;
