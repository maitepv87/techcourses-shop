import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../store/thunks/coursesThunks";
import { CourseList } from "../features";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <main>
      <section>
        <h2>Invest in Your Technical Future</h2>
        <CourseList />
      </section>
    </main>
  );
};
