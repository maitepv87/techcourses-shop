import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "../../store/slices/notificationSlice";

export const Notification = () => {
  const { message, type, visible } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => dispatch(hideNotification()), 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  if (!visible) return null;

  return (
    <div className={`notification ${type}`}>
      {message}
      <button onClick={() => dispatch(hideNotification())}>✕</button>
    </div>
  );
};
