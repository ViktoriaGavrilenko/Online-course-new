import React from "react";

export interface CourseDetailsProps {
  term: string;
  level: string;
  teacher: string;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ term, level, teacher }) => {
  return (
    <div className="flex items-center justify-between 2xl:w-[1496px] 2xl:h-[43px">
      <div className="flex items-center gap-[10px">
        <div
          className="flex items-center justify-center 2xl:w-[107px] 2xl:h-[43px] font-normal text-lg text-[#59595A]
                border-1 border-[#F1F1F3]"
        >
          {term}
        </div>
        <div
          className="flex items-center justify-center 2xl:w-[107px] 2xl:h-[43px] font-normal text-lg text-[#59595A] 
                    border-1 border-[#F1F1F3]"
        >
          {level}
        </div>
      </div>
      <div className="flex font-medium text-xl text-[#262626]">{teacher}</div>
    </div>
  );
};

export default CourseDetails;
