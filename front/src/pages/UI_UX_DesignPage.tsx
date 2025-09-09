import React from "react";

interface Props {}

const titleDesignItems = [
  {
    number: "01",
    title: "Introduction to UI/UX Design",
    lessons: [
      {
        title: "Understanding UI/UX Design Principles",
        lesson: "Lesson 01",
        img: "watch",
        time: "45 Minutes",
      },
      {
        title: "Importance of User-Centered Design",
        lesson: "Lesson 02",
        img: "watch",
        time: "1 Hour",
      },
      {
        title: "The Role of UI/UX Design in Product Development",
        lesson: "Lesson 03",
        img: "watch",
        time: "45 Minutes",
      },
    ],
  },
  {
    number: "02",
    title: "User Research and Analysis",
    lessons: [
      {
        title: "Conducting User Research and Interviews",
        lesson: "Lesson 01",
        img: "watch",
        time: "1 Hour",
      },
      {
        title: "Analyzing User Needs and Behavior",
        lesson: "Lesson 02",
        img: "watch",
        time: "1 Hour",
      },
      {
        title: "Creating User Personas and Scenarios",
        lesson: "Lesson 03",
        img: "watch",
        time: "45 Minutes",
      }
    ],
  },
  { number: "03", title: "Wireframing and Prototyping", lessons: [] },
  { number: "04", title: "Visual Design and Branding", lessons: [] },
  { number: "05", title: "Usability Testing and Iteration", lessons: [] },
];

const UI_UX_DesignPage: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-20 bg-grey-50">
      <div className="flex justify-around gap-60">
        <div className="flex font-semibold text-[48px] 2xl:w-[748xp] 2xl:h-[144px">
          UI/UX Design Course
        </div>
        <div className="flex 2xl:w-[600px] 2xl:h-[108px]">
          Welcome to our UI/UX Design course! This comprehensive program will
          equip you with the knowledge and skills to create exceptional user
          interfaces (UI) and enhance user experiences (UX). Dive into the world
          of design thinking, wireframing, prototyping, and usability testing.
          Below is an overview of the curriculum
        </div>
      </div>
      <div className="flex justify-center">
        <img src="img/ui_ux_design_video.png" alt="" />
      </div>
      <div className="flex justify-center gap-[30px] flex-wrap bg-white">
        {titleDesignItems.map(({ number, title, lessons }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[50px] px-8 2xl:w-[783px] 2xl:h-[698px] outline-1 outline-red-400"
          >
            <div
              className="flex justify-end 2xl:w-[683px] font-bold text-[80px] text-[#262626] 
             outline-1 outline-amber-500"
            >
              {number}
            </div>
            <div
              className="flex 2xl:w-[683px] font-semibold text-2xl text-[#333333] outline-1
            outline-amber-400"
            >
              {title}
            </div>
            <div className="flex flex-col gap-5 2xl:w-[683px] 2xl:h-[403px] tracking-wide outline-1 outline-blue-900">
              {lessons.map(({ title, lesson, img, time }, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-[6px] 2xl:w-[683px] 2xl:h-[111px] 
                border-1 border-[#F1F1F3]"
                >
                  <div className="flex flex-col gap-[6px] 2xl:w-[464px] outline-1 outline-amber-500">
                    <div className="flex font-medium text-xl">{title}</div>
                    <div className="flex font-normal text-lg">{lesson}</div>
                  </div>
                  <div className="flex items-center justify-center gap-1 2xl:w-[153px] 2xl:h-[48px] bg-[#F7F7F8]">
                    <img src={`icons/${img}.svg`} alt="" />
                    <div className="flex font-normal text-lg text-[#59595A]">
                      {time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UI_UX_DesignPage;
