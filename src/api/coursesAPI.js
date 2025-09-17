// Loads all courses from public/courses.json
export const getAllCourses = async () => {
  const response = await fetch("/courses.json");
  if (!response.ok) throw new Error("Error fetching course catalog");
  return await response.json();
};

// Loads a single course by ID from public/courses/{id}.json
export const getCourseById = async (id) => {
  const response = await fetch(`/courses/${id}.json`);
  if (!response.ok) throw new Error("Course not found");
  return await response.json();
};
