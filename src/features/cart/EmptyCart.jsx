import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div>
      <LinkButton
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>
      <p className="text=xl font-semibold mt-10">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
