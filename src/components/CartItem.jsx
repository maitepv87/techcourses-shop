import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../store/slices/shoppingCartSlice";
import { showNotification } from "../store/slices/notificationSlice";

export const CartItem = ({ id, title, level, price, quantity }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    // 1. Remove from cart
    dispatch(removeFromCart(id));

    // 2. Show notification
    dispatch(
      showNotification({
        message: "Successfully removed from the cart",
        type: "success",
      })
    );
  };

  return (
    <div className="cart-card">
      <header>
        <h4>{title}</h4>
      </header>

      <div className="cart-meta">
        <p>
          <strong>Level:</strong> {level}
        </p>
        <p>
          <strong>Price:</strong> ${price}
        </p>
        <p>
          <strong>Qty:</strong> {quantity}
        </p>
        <p>
          <strong>Total:</strong> ${(price * quantity).toFixed(2)}
        </p>
      </div>

      <div className="quantity-controls">
        <button type="button" onClick={() => dispatch(decreaseQuantity(id))}>
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={() => dispatch(increaseQuantity(id))}>
          +
        </button>

        <button type="button" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
};
