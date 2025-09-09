import React from "react";
import Curriculum from "./Curriculum";
import { mobileApp } from "../types/curriculum";
import TitleSection from "./TitleSection";
import CourseDetails from "./CourseDetails";

interface MobileAppProps {
  onNaviganeToMobileApp: ()=> void;
}

const MobileApp: React.FC<MobileAppProps> = ({onNaviganeToMobileApp}) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[30px] 2xl:px-9 2xl:h-[1027px]
      bg-white"
    >
      <TitleSection
        title="Mobile App Development"
        text="Dive into the world of mobile app development. Learn to build
              native iOS and Android applications using industry-leading
              frameworks like Swift and Kotlin."
        title_but="View Course"
        onButtonClick={onNaviganeToMobileApp}
        className="2xl:w-[160px] 2xl:h-[63px] bg-[#F1F1F3]"
      />
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex gap-[30px]">
          <img src="/img/mobileApp1.png" alt="img" />
          <img src="/img/mobileApp2.png" alt="img" />
          <img src="/img/mobileApp3.png" alt="img" />
        </div>
      </div>
      <CourseDetails
        term="8 Weeks"
        level="Intermediate"
        teacher="By David Brown"
      />
      <Curriculum items={mobileApp} />
    </div>
  );
};

export default MobileApp;
