import React from "react";
import WebDesignFundamentals from "../components/WebDesignFundamentals";

interface Props {}

const OnlineCourses: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-20 bg-grey-50">
      <div className="flex justify-between">
        <div className="flex font-semibold text-[48px] 2xl:w-[748xp] 2xl:h-[144px] outline-1 outline-red-500">
          Online Courses on Design and Development
        </div>
        <div
          className="flex 2xl:w-[748px] 2xl:h-[108px]
         outline-1 outline-red-500"
        >
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </div>
      </div>
      <div className="flex self-center justify-center 2xl:w-[1596px] 2xl:h-[5362px] outline-1 outline-red-500">
        <WebDesignFundamentals/>
      </div>
    </div>
  );
};

export default OnlineCourses;
