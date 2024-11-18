/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteButton from '../../ui/DeleteButton';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const isInCart = useSelector(getCurrentQuantityById(id));

  function handleAddPizza() {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newPizza));
  }

  return (
    <li key={id} className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && 'grayscale opacity-70'}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto font-medium flex justify-between">
          <p className="text-sm">{formatCurrency(unitPrice)}</p>
          {isInCart > 0 && <DeleteButton pizzaId={id} />}
          {!soldOut ? (
            !isInCart && (
              <div className="flex align-middle justify-between">
                <Button type="small" onClick={handleAddPizza}>
                  Add to Cart
                </Button>
              </div>
            )
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
