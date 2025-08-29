import React from 'react';
import { CurriculumItem } from '../types/curriculum';

interface CurriculumProps {
    items: CurriculumItem[];
}

const Curriculum: React.FC<CurriculumProps> = ({items}) => {
  return (
    <div className="flex flex-col 2xl:w-[1496px] 2xl:h-[252px] border-1 border-[#F1F1F3]">
        <div className="flex font-semibold px-6 py-4 text-[22px] text-[#262626] 
        border-1 border-[#F1F1F3]">
          Curriculum
        </div>
        <div className="flex items-center justify-center gap-[100px] 2xl:w-[1496px] h-full 
          border-1 border-[#F1F1F3]">
          {items.map((item) => (
            <div
              key={item.number}
              className="flex flex-col justify-between gap-[20px] 2xl:w-[199px] 2xl:h-[84px]"
            >
              <div className="flex font-extrabold text-[50px] my-[-20px] text-[#262626]">
                {item.number}
              </div>
              <div className="flex font-medium text-lg text-[#333333]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Curriculum;