import { useSelector } from "react-redux";

export const NavBar = () => {
  const { totalQuantity } = useSelector((state) => state.shoppingCart);

  return (
    <nav>
      <h2>TechCourses Shop</h2>
      <div>Cart ({totalQuantity})</div>
    </nav>
  );
};
