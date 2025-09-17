import { useSelector, useDispatch } from "react-redux";

export const CourseList = () => {
  const { courses, status, error } = useSelector(
    (state) => state.courseCatalog
  );

  if (status === "loading") return <p>Loading courses...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>{course.title}</div>
      ))}
    </div>
  );
};
