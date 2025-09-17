import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { items, subTotal, totalQuantity } = useSelector(
    (state) => state.shoppingCart
  );

  return (
    <aside className="cart-panel">
      <h3>Your Cart ({totalQuantity} items)</h3>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <p>Subtotal: ${subTotal.toFixed(2)}</p>
        </>
      )}
    </aside>
  );
};
