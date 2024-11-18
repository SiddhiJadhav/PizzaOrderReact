import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteItem } from '../features/cart/cartSlice';

export default function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteClick}>
      Delete
    </Button>
  );
}
