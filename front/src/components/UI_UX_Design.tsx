import React from 'react';
import Button from './Button';
import Curriculum from './Curriculum';
import {ui_designItems} from '../types/curriculum';

const UI_UX_Design: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px] 2xl:px-2 2xl:h-[1027px] 
         outline-1 outline-green-500">
      <div className="flex flex-col items-center gap-[30px] outline-1 outline-yellow-500">
        <div className="flex items-center outline-1 outline-blue-500">
          <div className="flex flex-col gap-[10px]">
            <div className="flex font-semibold text-2xl">
             UI/UX Design
            </div>
            <div className="flex font-normal text-lg outline-1 outline-amber-300">
               Master the art of creating intuitive user interfaces (UI) and enhancing user
               experiences (UX). Learn design principles, wireframing, prototyping, and usability 
               testing techn.
            </div>
          </div>
          <Button
            title_but="View Course"
            className="2xl:w-[160px] 2xl:h-[63px] bg-[#F1F1F3]"
          />
        </div>
        <div className="flex gap-[30px]">
          <img src="/img/ui_design1.png" alt="" />
          <img src="/img/ui_design2.png" alt="" />
          <img src="/img/ui_design3.png" alt="" />
        </div>
        <div className="flex items-center justify-between 2xl:w-[1496px] 2xl:h-[43px] outline-1 outline-red-500">
          <div className="flex items-center gap-[10px]">
            <div
              className="flex items-center justify-center 2xl:w-[107px] 2xl:h-[43px] font-normal text-lg text-[#59595A]
                border-1 border-[#F1F1F3]">
              6 Weeks
            </div>
            <div
              className="flex items-center justify-center 2xl:w-[107px] 2xl:h-[43px] font-normal text-lg text-[#59595A] 
                    border-1 border-[#F1F1F3]">
              Intermediate
            </div>
          </div>
          <div className="flex font-medium text-xl text-[#262626]">
            By Emile Johnson
          </div>
        </div>
      </div>
      <Curriculum items={ui_designItems}/>
    </div>
  );
};

export default UI_UX_Design;