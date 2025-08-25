import React from "react";
import TitleSection from "./TitleSection";
import Button from "./Button";

const contentItems = [
    {
        img: "image1",
        title_but1: "4 Weeks",
        title_but2: "Beginner",
        name: "By John Smith",
        title_text: "Web Design Fundamentals",
        description_text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles." +
            " Develop the skills to create visually appealing and user-friendly websites."
    },
    {
        img: "image2",
        title_but1: "6 Weeks",
        title_but2: "Intermediate",
        name: "By Emily Johnson",
        title_text: "UI/UX Design",
        description_text: "Master the art of creating intuitive user interfaces (UI) and enhancing user " +
            "experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
    },
    {
        img: "image3",
        title_but1: "8 Weeks",
        title_but2: "Intermediate",
        name: "By David Brown",
        title_text: "Mobile App Development",
        description_text: "Dive into the world of mobile app development. Learn to build native iOS and " +
            "Android applications using industry-leading frameworks like Swift and Kotlin."
    },
    {
        img: "image4",
        title_but1: "10 Weeks",
        title_but2: "Beginner",
        name: "By Sarah Thompson",
        title_text: "Graphic Design for Beginners",
        description_text: "Discover the fundamentals of graphic design, including typography, color theory, " +
            "layout design, and image manipulation techniques. Create visually stunning designs for print " +
            "and digital media."
    },
    {
        img: "image5",
        title_but1: "10 Weeks",
        title_but2: "Intermediate",
        name: "By Michael Adams",
        title_text: "Front-End Web Development",
        description_text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and " +
            "popular frameworks like Bootstrap and React. Build interactive and responsive websites."
    },
    {
        img: "image6",
        title_but1: "6 Weeks",
        title_but2: "Advance",
        name: "By Jennifer Wilson",
        title_text: "Advanced JavaScript",
        description_text: "Take your JavaScript skills to the next level. Explore advanced concepts like " +
            "closures, prototypes, asynchronous programming, and ES6 features. Build complex applications " +
            "with confidence."
    }

]

function OurCourses() {
    return (
        <div className="flex flex-col gap-10 w-full xl:max-w-[1279px] 2xl:max-w-[1597px] 2xl:gap-20">
            <TitleSection
                title="Our Courses"
                text="Lorem ipsum dolor sit amet consectetur. Tempus
               tincidunt etiam eget elit id imperdiet et. Cras eu sit
               dignissim lorem nibh et. Ac cum eget habitasse in velit
               fringilla feugiat senectus in."
                buttonText="View All"
            />
            <div className="flex flex-col sm:flex-row gap-5 w-full h-full px-2 xl:px-4 2xl:px-6 py-2 xl:py-4
                            2xl:py-6 2xl:gap-[30px] flex-wrap">
                {
                    contentItems.map(({img, title_but1, title_but2, name, title_text, description_text}, index) => (
                        <div key={index}
                             className="flex justify-center items-center rounded-[10px] w-full
                              flex-[1_1_calc(50%-20px)] max-w-[100%] px-2 xl:px-4 2xl:px-6 py-2 xl:py-4 2xl:py-6
                              bg-white 2xl:rounded-xl">
                            <div className="flex flex-col items-center justify-between gap-[24px] 2xl:gap-[30px]
                                            w-full h-full">
                                <div className="flex flex-col w-full gap-6 xl:gap-[24px] 2xl:gap-[30px]">
                                    <img src={`/img/${img}.png`} className="flex w-full" alt=""/>
                                    <div className="flex flex-col gap-[24px] 2xl:gap-[30px]">
                                        <div className="flex flex-col items-start gap-[14px] xl:flex-row
                                        xl:justify-between xl:items-center">
                                            <div className="flex 2xl:gap-1">
                                                <Button
                                                    title_but={title_but1}
                                                />
                                                <Button
                                                    title_but={title_but2}
                                                />
                                            </div>
                                            <div className="flex font-medium text-base 2xl:text-xl
                                                            color-[#262626]">{name}</div>
                                        </div>
                                        <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
                                            <div className="flex font-semibold  text-lg color-[#262626]
                                                            xl:text-xl 2xl:text-2xl">{title_text}</div>
                                            <div className="flex font-normal leading-[150%] text-sm
                                                color-[#4C4C4D] xl:text-base xl:tracking-normal
                                                2xl:text-lg 2xl:tracking-[1px]">{description_text}</div>
                                        </div>
                                    </div>
                                </div>
                                <button className='flex justify-center items-center color-[#262626] bg-[#F1F1F3]
                                 font-medium rounded-md text-sm px-2 py-2 xl:px-2 xl:py-2 2xl:px-2 2xl:py-2
                                 2xl:rounded-lg 2xl:text-lg'>Get it Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default OurCourses;