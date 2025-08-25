import React, {useState} from "react";
import AccordionItem, {questionItems} from "./AccordionItem";

function Questions() {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    }

    return (
        <div className="flex items-center justify-center bg-white w-full xl:max-w-[1279px] 2xl:max-w-[1595px]
                        px-12 py-12">
            <div className="flex flex-col sm:flex-row xl:flex-row gap-10 w-full h-full 2xl:gap-30">
                <div className="flex flex-col gap-5 w-full h-full xl:gap-10 2xl:gap-[50px]">
                    <div className="flex flex-col gap-2 w-full h-full 2xl:gap-[10px]">
                        <div className="flex color-[#262626] leading-[1.2] font-semibold text-[28px] xl:text-[38px]
                            xl:tracking-[1px] 2xl:text-[48px] 2xl:tracking-normal ">Frequently Asked Questions
                        </div>
                        <div className="flex color-[#333333] font-normal leading-[1.5] text-sm xl:text-base 2xl:text-lg">
                            Still you have any questions? Contact our Team via support@skillbridge.com
                        </div>
                    </div>
                    <button className="flex items-start justify-center bg-white font-medium text-sm 2xl:text-lg
                     rounded-md 2xl:rounded-lg px-4 py-4 border-1 border-solid border-[#F1F1F3]">See All FAQ’s
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 w-full xl:gap-[30px]
                                xl:w-[631px] xl:h-[860px] 2xl:w-[867px] 2xl:h-[1002px]">
                    {
                        questionItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                title={item.title}
                                answer={item.answer}
                                text_button={item.text_button}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Questions;