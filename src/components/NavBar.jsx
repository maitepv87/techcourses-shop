import { useState } from "react";
import { useSelector } from "react-redux";
import { Cart } from "./Cart";

export const NavBar = () => {
  const { totalQuantity } = useSelector((state) => state.shoppingCart);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav>
      <h2>TechCourses Shop</h2>
      <div onClick={() => setShowCart(true)}>Cart ({totalQuantity})</div>

      {showCart && (
        <>
          <div
            className="cart-overlay"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="cart-modal">
            <div className="cart-header">
              <h3>Your Cart</h3>
              <button onClick={() => setShowCart(false)}>✕</button>
            </div>
            <div className="cart-content">
              <Cart />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
