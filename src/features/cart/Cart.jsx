import { useSelector, useDispatch } from "react-redux";
import { showNotification } from "../../store/slices/notificationSlice";
import { clearCart } from "../../store/slices/shoppingCartSlice";
import { CartItem } from "../../features/cart/CartItem";

export const Cart = ({ onCheckout }) => {
  const { cartItems, subTotal, totalQuantity } = useSelector(
    (state) => state.shoppingCart
  );
  const dispatch = useDispatch();

  const handleCheckout = () => {
    // 1. Show notification
    dispatch(
      showNotification({
        message: "Your order successfully placed",
        type: "success",
      })
    );

    // 2. Empty cart
    dispatch(clearCart());

    // 3. Close modal
    onCheckout();
  };

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
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </aside>
  );
};
