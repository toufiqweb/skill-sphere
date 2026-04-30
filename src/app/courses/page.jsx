import { getAllCoursesData } from "@/lib/getAllCourses";
import CoursesPageClient from "@/components/coursespage/CoursesPageClient";

const CoursesPage = async () => {
  const courses = await getAllCoursesData();

  return <CoursesPageClient courses={courses} />;
};

export default CoursesPage;
