import React from "react";
import TitleSection from "./TitleSection.tsx";
import OneTestimonial from "./OneTestimonial.tsx";

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
        <div className="flex flex-col gap-10 xl:gap-[60px] w-full xl:max-w-[1279px] 2xl:gap-20 2xl:max-w-[1597px]">
            <TitleSection
                title="Our Testimonials"
                text="Lorem ipsum dolor sit amet consectetur. Tempus
               tincidunt etiam eget elit id imperdiet et. Cras eu sit
               dignissim lorem nibh et. Ac cum eget habitasse in velit
               fringilla feugiat senectus in."
                buttonText="View All"
            />
            <div className="flex flex-col sm:flex-row flex-wrap w-full h-full gap-5 2xl:gap-[30px]
            outline-1 outline-green-600">
                {
                    testimonialsItems.map(({description, img, name}, index) => (
                        <OneTestimonial
                            index={index}
                            description={description}
                            img={img}
                            name={name}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default OurTestimonials;