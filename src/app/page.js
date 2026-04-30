import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import PopularCourses from "@/components/homepage/PopularCourses";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularCourses/>
      <LearningTips/>
    </div>
  );
}
