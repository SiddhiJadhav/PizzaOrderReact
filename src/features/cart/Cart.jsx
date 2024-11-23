import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';

function Cart() {
  const userName = useSelector(state => state.user.userName);
  const cart = useSelector(state => state.cart.cart);

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <>
      {cart.length == 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <LinkButton
            to="/menu"
            className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
          >
            &larr; Back to menu
          </LinkButton>
          <>
            <h2 className="text-xl font-semibold text-slate-800 pt-7">
              Your cart, {userName}
            </h2>

            <ul className="divide-y divide-stone-200 border-b mt-6">
              {cart.map(item => (
                <CartItem item={item} key={item.key} showDelete={true} />
              ))}
            </ul>

            <div className="mt-6 space-x-2">
              <Button type="primary" to="/order/new">
                Order pizzas
              </Button>
              {/* <Link to="/order/new">Order pizzas</Link> */}
              <Button type="secondary" onClick={handleClearCart}>
                Clear cart
              </Button>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default Cart;
