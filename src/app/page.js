import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import PopularCourses from "@/components/homepage/PopularCourses";
import TopInstructors from "@/components/homepage/TopInstructors";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularCourses/>
      <LearningTips/>
      <TopInstructors/>
    </div>
  );
}
