import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import NewReleases from "@/components/homepage/NewReleases";
import PopularCourses from "@/components/homepage/PopularCourses";
import StartLearningToday from "@/components/homepage/StartLearningToday";
import Stats from "@/components/homepage/Stats";
import TopInstructors from "@/components/homepage/TopInstructors";
import WhatOurStudentSay from "@/components/homepage/WhatOurStudentSay";

export default function Home() {
  return (
    <div className="space-y-15">
      <Banner/>
      <PopularCourses/>
      <LearningTips/>
      <TopInstructors/>
      <Stats/>
      <WhatOurStudentSay/>
      <StartLearningToday/>
      <NewReleases/>
    </div>
  );
}
