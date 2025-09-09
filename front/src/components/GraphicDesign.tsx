import React from "react";
import { graphicDesign } from "../types/curriculum";
import Curriculum from "./Curriculum";
import TitleSection from "./TitleSection";
import CourseDetails from "./CourseDetails";

interface GraphicDesignProps {
  onNavigateToGraphicDisagn: ()=> void;
}

const GraphicDesign: React.FC<GraphicDesignProps> = ({onNavigateToGraphicDisagn}) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[30px] 2xl:px-9 2xl:h-[1027px]
      bg-white"
    >
      <TitleSection
        title="Graphic Design for Beginners"
        text=" Discover the fundamentals of graphic design, including typography, color theory, 
             layout design, and image manipulation techniques. Create visually stunning designs 
             for print and digital media."
        title_but="View Course"  
        onButtonClick={onNavigateToGraphicDisagn}   
        className="2xl:w-[160px] 2xl:h-[63px] bg-[#F1F1F3]"
      />
      <div className="flex flex-col items-center gap-[30px] outline-1 outline-yellow-500">
        <div className="flex gap-[30px]">
          <img src="/img/web_des1.png" alt="" />
          <img src="/img/web_des2.png" alt="" />
          <img src="/img/web_des3.png" alt="" />
        </div>
      </div>
      <CourseDetails
        term="8 Weeks"
        level="Intermediate"
        teacher="By David Brown"
      />
      <Curriculum items={graphicDesign} />
    </div>
  );
};

export default GraphicDesign;
