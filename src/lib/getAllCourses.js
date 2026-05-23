export const getAllCoursesData = async () => {
  const res = await fetch("http://localhost:3000/data.json",{cache:"no-store"});

  const courses = await res.json();
  return courses;
};
