import React from 'react';
import { AboutCourseItem } from '../types/aboutCourse';

interface AboutCourseProps {
    item: AboutCourseItem;
}

const AboutCourse: React.FC<AboutCourseProps> = ({item}) => {
  return (
    <div className="flex items-center justify-between 2xl:w-[1496px] 2xl:h-[43px] outline-1 outline-red-500">
          <div className="flex items-center gap-[10px]">
            <div
              className="flex items-center justify-center 2xl:w-[107px] 2xl:h-[43px] font-normal text-lg text-[#59595A]
                border-1 border-[#F1F1F3]">
              {item.term}
            </div>
            <div
              className="flex items-center justify-center 2xl:w-[107px] 2xl:h-[43px] font-normal text-lg text-[#59595A] 
                    border-1 border-[#F1F1F3]">
              {item.level}
            </div>
          </div>
          <div className="flex font-medium text-xl text-[#262626]">
            {item.teacher}
          </div>
        </div>
  );
};

export default AboutCourse;