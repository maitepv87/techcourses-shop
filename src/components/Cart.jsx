import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartItems, subTotal, totalQuantity } = useSelector(
    (state) => state.shoppingCart
  );

  console.log("cartItems", cartItems);

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
          <p className="cart-subtotal">
            <strong>Subtotal:</strong> ${subTotal.toFixed(2)}
          </p>
          <button className="checkout-btn" onClick={() => alert("Checkout")}>
            Checkout
          </button>
        </>
      )}
    </aside>
  );
};
