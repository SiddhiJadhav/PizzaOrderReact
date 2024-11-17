// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import CartItem from '../cart/CartItem';

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  console.log(order);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="text-xl font-semibold">Order #${id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 text-red-50 text-xs uppercase tracking-wide font-semibold rounded-full px-2 py-0.5 ">
              Priority
            </span>
          )}
          <span className="bg-green-500 text-green-50 text-xs uppercase tracking-wide font-semibold rounded-full px-2 py-0.5 ">
            {status} order
          </span>
        </div>
      </div>

      <ul className="divide-y divide-stone-200 border-b mt-6">
        {cart.map(item => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 rounded-lg p-6">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div className="gap-2 bg-stone-200 rounded-lg p-6">
        <p className="text-sm font-medium">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-sm font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;
