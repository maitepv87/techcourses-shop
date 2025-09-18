import { useState } from "react";
import { useSelector } from "react-redux";
import { Cart } from "./Cart";

export const NavBar = () => {
  const { totalQuantity } = useSelector((state) => state.shoppingCart);
  const [showCart, setShowCart] = useState(false);

  const handleOpenCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <nav>
      <h2>TechCourses Shop</h2>
      <div onClick={handleOpenCart}>Cart ({totalQuantity})</div>

      {showCart && (
        <>
          <div className="cart-overlay" onClick={handleCloseCart}></div>
          <div className="cart-modal">
            <div className="cart-header">
              <h3>Your Cart</h3>
              <button onClick={handleCloseCart}>✕</button>
            </div>
            <div className="cart-content">
              <Cart onCheckout={handleCloseCart} />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
