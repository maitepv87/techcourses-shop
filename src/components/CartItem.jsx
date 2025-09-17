import { useDispatch } from "react-redux";
// import { removeFromCart } from "../store/slices/shoppingCartSlice";

export const CartItem = ({ id, title, price, quantity }) => {
  const dispatch = useDispatch();

  // const handleRemove = () => {
  //   dispatch(removeFromCart(id));
  // };

  return (
    <div className="cart-item" aria-label={`Cart item: ${title}`}>
      <div className="item-info">
        <h4>{title}</h4>
        <p>
          ${price} × {quantity} ={" "}
          <strong>${(price * quantity).toFixed(2)}</strong>
        </p>
      </div>

      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};
