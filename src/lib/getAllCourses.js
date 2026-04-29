export const getAllCoursesData = async () => {
  const res = await fetch("https://skill-sphere-ecru-ten.vercel.app/data.json",{cache:"no-store"});

  const courses = await res.json();
  return courses;
};
