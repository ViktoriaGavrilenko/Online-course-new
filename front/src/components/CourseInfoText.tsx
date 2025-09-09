import React from "react";

export interface CourseInfoTextProps {
    title_text: string;
    description_text: string;
}

const CourseInfoText: React.FC<CourseInfoTextProps> = ({title_text, description_text}) => {
  return (
    <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
      <div
        className="flex font-semibold  text-lg color-[#262626] xl:text-xl 2xl:text-2xl"
      >
        {title_text}
      </div>
      <div
        className="flex font-normal leading-[150%] text-sm color-[#4C4C4D] xl:text-base 
                xl:tracking-normal 2xl:text-lg 2xl:tracking-[1px]"
      >
        {description_text}
      </div>
    </div>
  );
};

export default CourseInfoText;
