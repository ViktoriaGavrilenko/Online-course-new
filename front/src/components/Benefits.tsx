import React from "react";
import TitleSection from "./TitleSection.tsx";

const cardItems = [
    {
        number: "01",
        title: "Flexible Learning Schedule",
        subtitle: "Fit your coursework around your existing commitments and obligations.",
        img: "arrow"
    },
    {
        number: "02",
        title: "Expert Instruction",
        subtitle: "Learn from industry experts who have hands-on experience in design and development.",
        img: "arrow"
    },
    {
        number: "03",
        title: "Diverse Course Offerings",
        subtitle: "Explore a wide range of design and development courses covering various topics.",
        img: "arrow"
    },
    {
        number: "04",
        title: "Updated Curriculum",
        subtitle: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
        img: "arrow"
    },
    {
        number: "05",
        title: "Practical Projects and Assignments",
        subtitle: "Develop a portfolio showcasing your skills and abilities to potential employers.",
        img: "arrow"
    },
    {
        number: "06",
        title: "Interactive Learning Environment",
        subtitle: "Collaborate with fellow learners, exchanging ideas and feedback to enhance understanding.",
        img: "arrow"
    },
]

function Benefits() {
    return (
        <div className="flex flex-col gap-10 w-full xl:gap-[60px] xl:max-w-[1279px]
                        2xl:gap-20 2xl:max-w-[1597px]">
            <TitleSection
                title="Benefits"
                text="Lorem ipsum dolor sit amet consectetur. Tempus
                   tincidunt etiam eget elit id imperdiet et. Cras eu sit
                   dignissim lorem nibh et. Ac cum eget habitasse in
                   velit fringilla feugiat senectus in."
                buttonText="View All"
            />
            <div className="flex flex-col md:flex-row gap-5 w-full h-full px-2 xl:px-4 2xl:px-6 py-2 xl:py-4
                            2xl:py-6">
                <div className="flex flex-wrap gap-5">
                    {
                        cardItems.map((item, index) => (
                            <div key={index}
                                 className={`flex ${index >= 4 ? "hidden md:flex" : "flex"} justify-center 
                                 items-center bg-white rounded-[10px] flex-[1_1_calc(33.333%-20px)] max-w-[100%]
                                 w-full px-2 xl:px-4 2xl:px-6 py-2 xl:py-4 2xl:py-6 2xl:rounded-xl`}>
                                <div className="flex flex-col justify-between gap-[30px] w-full h-full px-2
                                xl:px-4 2xl:px-6 py-2 xl:py-4 2xl:py-6 xl:gap-10 2xl:gap-[50px]">
                                    <div className="flex self-end font-bold text-[50px] h-[37px] xl:text-[60px]
                                    xl:h-[44px] 2xl:text-[60px] 2xl:h-[56px]">{item.number}</div>
                                    <div className="flex flex-col items-start xl:gap-[10px] 2xl:gap-[14px]
                                    px-2 xl:px-4 2xl:px-6 py-2 xl:py-4 2xl:py-6">
                                        <div className="flex font-semibold text-xl 2xl:text-2xl">{item.title}</div>
                                        <div
                                            className="flex font-normal text-sm xl:text-base 2xl:text-lg">{item.subtitle}</div>
                                    </div>
                                    <button className="flex items-center justify-center self-end bg-[#FCFCFD]
                                    rounded-md w-[54px] h-[54px] 2xl:rounded-lg 2xl:w-[74px] 2xl:h-[74px]">
                                        <img src={`/icons/${item.img}.png`} className="flex w-[26px] h-[26px]
                                        2xl:w-[34px] 2xl:h-[34px]" alt=""/>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Benefits;