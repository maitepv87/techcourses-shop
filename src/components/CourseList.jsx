import { useSelector, useDispatch } from "react-redux";

export const CourseList = () => {
  const { items, status, error } = useSelector((state) => state.courses);

  if (status === "loading") return <p>Loading courses...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      {items.map((course) => (
        <div key={course.id}>{course.title}</div>
      ))}
    </div>
  );
};
