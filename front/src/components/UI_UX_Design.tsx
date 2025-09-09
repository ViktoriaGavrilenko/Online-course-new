import React from "react";
import Curriculum from "./Curriculum";
import { ui_designItems } from "../types/curriculum";
import CourseDetails from "./CourseDetails";
import TitleSection from "./TitleSection";

interface UI_UX_DesignProps {
  onNavigateToUiUxPage: ()=> void;
}

const UI_UX_Design: React.FC<UI_UX_DesignProps> = ({onNavigateToUiUxPage}) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[30px] 2xl:px-9 2xl:h-[1027px]
      bg-white"
    >
      <TitleSection
        title="UI/UX Design"
        text="Master the art of creating intuitive user interfaces (UI) and
              enhancing user experiences (UX). Learn design principles,
              wireframing, prototyping, and usability testing techn."
        title_but="View Course"
        onButtonClick={onNavigateToUiUxPage}
        className="2xl:w-[160px] 2xl:h-[63px] bg-[#F1F1F3]"
      />
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex gap-[30px]">
          <img src="/img/ui_design1.png" alt="img" />
          <img src="/img/ui_design2.png" alt="img" />
          <img src="/img/ui_design3.png" alt="img" />
        </div>
      </div>
      <CourseDetails
        term="6 Weeks"
        level="Intermediate"
        teacher="By Emily Johnson"
      />
      <Curriculum items={ui_designItems} />
    </div>
  );
};

export default UI_UX_Design;
