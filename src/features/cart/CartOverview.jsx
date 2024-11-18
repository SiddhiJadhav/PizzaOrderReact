import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
//import { getTotalQuantity } from './cartSlice';

function CartOverview() {
  // const totaQuantity = useSelector(getTotalQuantity());
  const totaQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 uppercase p-4 sm:p-6 text-sm md:text-base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totaQuantity} pizzas</span>
        <span>$ {totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
