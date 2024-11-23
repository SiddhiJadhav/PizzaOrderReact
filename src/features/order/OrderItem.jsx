import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  debugger;
  return (
    // <li>
    //   <div>
    //     <p>
    //       <span>{quantity}&times;</span> {name}
    //     </p>
    //     <p>{formatCurrency(totalPrice)}</p>
    //   </div>
    // </li>

    <li className="mx-2 py-3 sm:flex sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm text-stone-500 italic">
          {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
        </p>
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
