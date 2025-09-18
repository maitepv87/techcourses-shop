import { useSelector, useDispatch } from "react-redux";
import { CourseCard } from "./CourseCard";

export const CourseList = () => {
  const { courses, status, error } = useSelector(
    (state) => state.courseCatalog
  );

  if (status === "loading") return <p>Loading courses...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <section aria-label="Available Courses">
      {courses.length === 0 ? (
        <p>No courses available at the moment.</p>
      ) : (
        courses.map((course) => <CourseCard key={course.id} course={course} />)
      )}
    </section>
  );
};
