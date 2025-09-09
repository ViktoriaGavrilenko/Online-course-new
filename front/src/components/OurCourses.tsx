import React from "react";
import TitleSection from "./TitleSection";
import Button from "./Button";
import CourseDetails from "./CourseDetails";
import CourseInfoText from "./CourseInfoText";

const contentItems = [
  {
    img: "image1",
    term: "4 Weeks",
    level: "Beginner",
    teacher: "By John Smith",
    title_text: "Web Design Fundamentals",
    description_text:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles." +
      " Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    img: "image2",
    term: "6 Weeks",
    level: "Intermediate",
    teacher: "By Emily Johnson",
    title_text: "UI/UX Design",
    description_text:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user " +
      "experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
  },
  {
    img: "image3",
    term: "8 Weeks",
    level: "Intermediate",
    teacher: "By David Brown",
    title_text: "Mobile App Development",
    description_text:
      "Dive into the world of mobile app development. Learn to build native iOS and " +
      "Android applications using industry-leading frameworks like Swift and Kotlin.",
  },
  {
    img: "image4",
    term: "10 Weeks",
    level: "Beginner",
    teacher: "By Sarah Thompson",
    title_text: "Graphic Design for Beginners",
    description_text:
      "Discover the fundamentals of graphic design, including typography, color theory, " +
      "layout design, and image manipulation techniques. Create visually stunning designs for print " +
      "and digital media.",
  },
  {
    img: "image5",
    term: "10 Weeks",
    level: "Intermediate",
    teacher: "By Michael Adams",
    title_text: "Front-End Web Development",
    description_text:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and " +
      "popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
  },
  {
    img: "image6",
    term: "6 Weeks",
    level: "Advance",
    teacher: "By Jennifer Wilson",
    title_text: "Advanced JavaScript",
    description_text:
      "Take your JavaScript skills to the next level. Explore advanced concepts like " +
      "closures, prototypes, asynchronous programming, and ES6 features. Build complex applications " +
      "with confidence.",
  },
];

function OurCourses() {
  return (
    <div className="flex flex-col gap-10 w-full xl:max-w-[1279px] 2xl:max-w-[1597px] 2xl:gap-20">
      <TitleSection
        title="Our Courses"
        text="Lorem ipsum dolor sit amet consectetur. Tempus
               tincidunt etiam eget elit id imperdiet et. Cras eu sit
               dignissim lorem nibh et. Ac cum eget habitasse in velit
               fringilla feugiat senectus in."
        title_but="View All"
        className="flex justify-center items-center font-normal w-[86px] h-[34px] rounded-md
           text-sm 2xl:w-[107px] 2xl:h-[43px] 2xl:rounded-lg 2xl:text-lg
           border-1 border-solid border-[#F1F1F3]"
      />
      <div
        className="flex flex-col sm:flex-row gap-5 w-full h-full px-2 xl:px-4 2xl:px-6 py-2 xl:py-4
                            2xl:py-6 2xl:gap-[30px] flex-wrap"
      >
        {contentItems.map(
          (
            { img, term, level, teacher, title_text, description_text },
            index
          ) => (
            <div
              key={index}
              className="flex justify-center items-center rounded-[10px] w-full
                              flex-[1_1_calc(50%-20px)] max-w-[100%] px-2 xl:px-4 2xl:px-6 py-2 xl:py-4 2xl:py-6
                              bg-white 2xl:rounded-xl"
            >
              <div
                className="flex flex-col items-center justify-between gap-[24px] 2xl:gap-[30px]
                                            w-full h-full"
              >
                <div className="flex flex-col w-full gap-6 xl:gap-[24px] 2xl:gap-[30px]">
                  <img src={`/img/${img}.png`} className="flex w-full" alt="" />
                  <div className="flex flex-col gap-[24px] 2xl:gap-[30px]">
                    <div
                      className="flex flex-col items-start gap-[14px] xl:flex-row
                                        xl:justify-between xl:items-center"
                    >
                      <CourseDetails
                        term={term}
                        level={level}
                        teacher={teacher}
                      />
                    </div>
                    <CourseInfoText
                      title_text={title_text}
                      description_text={description_text}
                    />
                  </div>
                </div>
                <Button
                  title_but="Get it Now"
                  className="flex justify-center items-center color-[#262626] bg-[#F1F1F3]
                                 font-medium rounded-md text-sm px-2 py-2 xl:px-2 xl:py-2 2xl:px-2 2xl:py-2
                                 2xl:rounded-lg 2xl:text-lg"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default OurCourses;
