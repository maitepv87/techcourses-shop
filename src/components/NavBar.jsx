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
        <div className="cart-modal">
          <Cart />
          <button onClick={() => setShowCart(false)}>Close</button>
        </div>
      )}
    </nav>
  );
};
