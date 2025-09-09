import React from "react";
import UI_UX_Design from "../components/UI_UX_Design";
import MobileApp from "../components/MobileApp";
import GraphicDesign from "../components/GraphicDesign";
import Front_End_Web from "../components/Front_End_Web";
import { useNavigate } from "react-router-dom";
import WebDesign from "../components/WebDesign";

interface Props {}

const OnlineCourses: React.FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-20 bg-grey-50">
      <div className="flex justify-center gap-10">
        <div className="flex font-semibold text-[48px] 2xl:w-[748xp] 2xl:h-[144px">
          Online Courses on Design and Development
        </div>
        <div
          className="flex 2xl:w-[600px] 2xl:h-[108px]"
        >
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </div>
      </div>
      <div className="flex flex-col self-center gap-[50px] 2xl:w-[1596px] 2xl:h-[5362px">
        <WebDesign onNavigateToWebDesignPage={()=> navigate("/webDesignPage")}/>
        <UI_UX_Design onNavigateToUiUxPage={()=> navigate("/ui_ux_designPage")}/>
        <MobileApp onNaviganeToMobileApp={()=> navigate("/mobileAppPage")}/>
        <GraphicDesign onNavigateToGraphicDisagn={()=> navigate("/graphicDesignPage")}/>
        <Front_End_Web onNavigateToFront_End_WebPage={()=> navigate("/front_end_webPage")}/>
      </div>
    </div>
  );
};

export default OnlineCourses;
