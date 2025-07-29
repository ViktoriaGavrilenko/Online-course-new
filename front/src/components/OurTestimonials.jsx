import React from "react";
import TitleSection from "./TitleSection.jsx";

const testimonialsItems = [
    {
        description: "The web design course provided a solid foundation for me. The instructors were " +
            "knowledgeable and supportive, and the interactive learning environment was engaging. I highly " +
            "recommend it!",
        img: "person1",
        name: "Sarah L"
    },
    {
        description: "The UI/UX design course exceeded my expectations. The instructor's expertise and " +
            "practical assignments helped me improve my design skills. I feel more confident in my career " +
            "now. Thank you!",
        img: "person2",
        name: "Jason M"
    },
    {
        description: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on" +
            " projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
        img: "person3",
        name: "Emily R"
    },
    {
        description: "I enrolled in the graphic design course as a beginner, and it was the perfect starting " +
            "point. The instructor's guidance and feedback improved my design abilities significantly. " +
            "I'm grateful for this course!",
        img: "person4",
        name: "Michael K"
    }
]

function OurTestimonials() {
    return (
        <div className="flex flex-col gap-10 w-full xl:gap-[60px] xl:max-w-[1279px] 2xl:gap-20 2xl:max-w-[1597px]">
            <TitleSection
                title="Our Testimonials"
                text="Lorem ipsum dolor sit amet consectetur. Tempus
               tincidunt etiam eget elit id imperdiet et. Cras eu sit
               dignissim lorem nibh et. Ac cum eget habitasse in velit
               fringilla feugiat senectus in."
                buttonText="View All"
            />
            <div className="flex flex-col sm:flex-row flex-wrap w-full h-full gap-5 2xl:gap-[30px]">
                {
                    testimonialsItems.map(({description, img, name}, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-white
                                   w-full h-full rounded-[10px] flex-[1_1_calc(50%-20px)] max-w-[100%]
                                   xl:rounded-[10px] 2xl:rounded-xl">
                            <div className="flex items-center justify-center w-full h-full
                                            px-2 xl:px-4 2xl:px-6 py-2 xl:py-4 2xl:py-6">
                                <div className="flex font-normal leading-[150%] text-sm w-full h-full px-2 xl:px-4
                                 2xl:px-6 py-2 xl:py-4 2xl:py-6 xl:text-base xl:tracking-normal 2xl:text-lg
                                 2xl:tracking-[1px]">{description}</div>
                            </div>
                            <div className="flex justify-center items-center w-full h-full  px-2 xl:px-4 2xl:px-6
                                            py-2 xl:py-4 2xl:py-6 bg-[#FCFCFD]">
                                <div className="flex items-center gap-[10px] w-full h-full 2xl:gap-[15px]
                                                px-2 py-0 xl:px-2 xl:py-0 2xl:px-2 2xl:py-0">
                                    <img src={`img/${img}.png`} alt=""/>
                                    <div className="flex font-semibold color-[#333333] text-base 2xl:text-lg">
                                        {name}
                                    </div>
                                </div>
                                <button className="flex items-center justify-center font-medium bg-[#F1F1F3]
                                px-2 py-2 text-sm xl:px-2 xl:py-2 2xl:px-2 2xl:py-1 2xl:text-lg">Read Full Story
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default OurTestimonials;