import React from 'react';
import Curriculum from './Curriculum';
import Button from './Button';
import {mobileApp} from '../types/curriculum';
import AboutCourse from './AboutCourse';

const MobileApp: React.FC = () => {
  return (
     <div className="flex flex-col justify-center items-center gap-[50px] 2xl:px-2 2xl:h-[1027px] 
         outline-1 outline-green-500">
      <div className="flex flex-col items-center gap-[30px] outline-1 outline-yellow-500">
        <div className="flex items-center outline-1 outline-blue-500">
          <div className="flex flex-col gap-[10px]">
            <div className="flex font-semibold text-2xl">
             Mobile App Development
            </div>
            <div className="flex font-normal text-lg outline-1 outline-amber-300">
               Dive into the world of mobile app development. Learn to build native iOS and 
               Android applications using industry-leading frameworks like Swift and Kotlin.
            </div>
          </div>
          <Button
            title_but="View Course"
            className="2xl:w-[160px] 2xl:h-[63px] bg-[#F1F1F3]"
          />
        </div>
        <div className="flex gap-[30px]">
          <img src="/img/mobileApp1.png" alt="" />
          <img src="/img/mobileApp2.png" alt="" />
          <img src="/img/mobileApp3.png" alt="" />
        </div>
    <AboutCourse item={{term:"8 Weeks", level: "Intermediate", teacher: "By David Brown"}}/>
      </div>
      <Curriculum items={mobileApp}/>
    </div>
  );
};

export default MobileApp;