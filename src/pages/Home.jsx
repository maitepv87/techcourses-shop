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
      <section className="home-hero">
        <h2 className="hero-title">Invest in Your Technical Future</h2>
        <CourseList />
      </section>
    </main>
  );
};
