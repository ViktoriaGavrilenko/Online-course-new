import React from "react";
import Curriculum from "./Curriculum";
import { webDesignItems } from "../types/curriculum";
import TitleSection from "./TitleSection";
import CourseDetails from "./CourseDetails";

interface WebDesignProps {
  onNavigateToWebDesignPage: ()=> void;
}

const WebDesign: React.FC<WebDesignProps> = ({onNavigateToWebDesignPage}) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[30px] 2xl:px-9 2xl:h-[1027px]
      bg-white"
    >
      <TitleSection
        title="Web Design Fundamentals"
        text="Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites."
        title_but="View Course"
        onButtonClick={onNavigateToWebDesignPage}
        className="2xl:w-[160px] 2xl:h-[63px] bg-[#F1F1F3]"
      />

      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex gap-[30px]">
          <img src="/img/web_des1.png" alt="img" />
          <img src="/img/web_des2.png" alt="img" />
          <img src="/img/web_des3.png" alt="img" />
        </div>
      </div>
      <CourseDetails
        term="4 Weeks"
        level="Beginner"
        teacher="By John Smith"
      />
      <Curriculum items={webDesignItems} />
    </div>
  );
};

export default WebDesign;
