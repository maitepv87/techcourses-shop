import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/shoppingCartSlice";
import { showNotification } from "../../store/slices/notificationSlice";

export const CourseCard = ({ course }) => {
  const dispatch = useDispatch();

  const { title, provider, description, level, price, benefits = [] } = course;

  const handleAddCourse = () => {
    // 1. Add to cart
    dispatch(addToCart(course));

    // 2. Show notification
    dispatch(
      showNotification({
        message: "Successfully added to the cart",
        type: "success",
      })
    );
  };

  return (
    <article className="course-card" aria-label={`Course: ${title}`}>
      <header>
        <h3>{title}</h3>
        <p className="provider">{provider}</p>
      </header>

      <div className="course-meta">
        <p>
          <strong>Level:</strong> {level}
        </p>
        <p>
          <strong>Price:</strong> ${price}
        </p>
      </div>

      <p className="description">{description}</p>

      {benefits.length > 0 && (
        <ul className="benefits">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      )}

      <button type="button" onClick={handleAddCourse}>
        Add to cart
      </button>
    </article>
  );
};
