import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartItems, subTotal, totalQuantity } = useSelector(
    (state) => state.shoppingCart
  );

  console.log(cartItems);

  return (
    <aside className="cart-panel">
      <h3>Your Cart ({totalQuantity} items)</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <p>Subtotal: ${subTotal.toFixed(2)}</p>
        </>
      )}
    </aside>
  );
};
