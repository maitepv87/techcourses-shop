export const fetchAllCourses = async () => {
  const response = await fetch("/courses.json");
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  return data;
};

export const fetchById = async (id) => {
  const response = await fetch(`/courses/${id}.json`);
  if (!response.ok) {
    throw new Error("Course not found");
  }
  const data = await response.json();
  return data;
};
