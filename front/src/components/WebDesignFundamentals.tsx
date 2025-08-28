import React from "react";
import Button from "./Button";

interface Props {}

const WebDesignFundamentals: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center gap-[50px] 2xl:px-2 outline-1 outline-green-500">
      <div className="flex flex-col items-center gap-[30px] outline-1 outline-yellow-500">
        <div className="flex items-center gap-[50px] outline-1 outline-blue-500">
          <div className="flex flex-col gap-[10px]">
            <div className="flex font-semibold text-2xl">
              Web Design Fundamentals
            </div>
            <div className="flex font-normal text-lg">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </div>
          </div>
          <Button
            title_but="View Course"
            className="2xl:w-[160px] 2xl:h-[63px] bg-[#F1F1F3]"
          />
        </div>
        <div className="flex gap-[30px]">
          <img src="/img/web_des1.png" alt="" />
          <img src="/img/web_des2.png" alt="" />
          <img src="/img/web_des3.png" alt="" />
        </div>
        <div className="flex items-center justify-between 2xl:w-[1496px] 2xl:h-[43px] outline-1 outline-red-500">
          <div className="flex gap-[10px]">
            <Button
              title_but="4 Weeks"
              className="flex 2xl:w-[107px] 2xl:h-[43px] font-normal text-lg text-[#59595A] 
                    cursor-pointer"
            />
            <Button
              title_but="Beginner"
              className="flex 2xl:w-[107px] 2xl:h-[43px] font-normal text-lg text-[#59595A] 
                    cursor-pointer"
            />
          </div>
          <div className="flex font-medium text-xl text-[#262626]">
            By John Smith
          </div>
        </div>
      </div>
      <div className="flex flex-col 2xl:w-[1496px] 2xl:h-[252px] outline-1 outline-red-500">
        <div className="flex font-semibold px-6 py-4 text-[22px] text-[#262626] outline-1 outline-lime-500">
          Curriculum
        </div>
        <div className="flex items-center justify-center 2xl:w-[1496px] 2xl:h-[171px] outline-1 outline-lime-500">
          <div className="flex flex-col justify-between 2xl:w-[199px] 2xl:h-[84px] outline-1 outline-blue-500">
             <div className="flex font-extrabold text-[50px] my-[-20px] text-[#262626]">01</div>
             <div className="flex font-medium text-lg text-[#333333]">Introduction to HTML</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignFundamentals;
