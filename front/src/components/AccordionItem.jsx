import React from "react";

const questionItems = [
    {
        title: "Can I enroll in multiple courses at once?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        text_button: "Enrollment Process for Different Courses"
    },
    {
        title: "What kind of support can I expect from instructors?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        text_button: "Enrollment Process for Different Courses"
    },
    {
        title: "Are the courses self-paced or do they have specific start and end dates?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        text_button: "Enrollment Process for Different Courses"
    },
    {
        title: "Are there any prerequisites for the courses?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        text_button: "Enrollment Process for Different Courses"
    },
    {
        title: "Can I download the course materials for offline access?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        text_button: "Enrollment Process for Different Courses"
    },
]

function AccordionItem({title, answer, text_button, isOpen, onToggle}) {

    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-full rounded-[10px]
         xl:w-[631px] 2xl:gap-[50px] 2xl:w-[867px] 2xl:rounded-xl border-1 border-solid border-[#F1F1F3]">
            <div className="flex items-center gap-[30px] w-full h-full px-8 py-4">
                <div className="flex font-medium text-base w-full xl:text-lg 2xl:text-xl">{title}</div>
                <button onClick={onToggle}>
                    <img src={isOpen ? "/img/button_x.png" : "/img/button_+.png"} alt=""/>
                </button>
            </div>
            {isOpen && (
                <div className="flex flex-col items-center justify-center gap-5 w-full px-8 py-4 2xl:gap-[50px]">
                    <div
                        className="flex items-center font-normal liading-[1.5] text-sm w-full
                                   xl:text-base 2xl:text-lg 2xl:tracking-[1px]">
                        {answer}
                    </div>
                    <div className="flex justify-around items-center bg-[#F1F1F3] rounded-md w-full px-4
                                    2xl:rounded-lg">
                        <div className="flex items-center font-medium text-sm w-full px-4">{text_button}</div>
                        <button className="flex justify-center items-center rounded-[50%] px-4 py-4 bg-white">
                            <img src="/icons/arrow_right.svg" alt=""/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export {questionItems};
export default AccordionItem;