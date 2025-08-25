import React from "react";
import TitleSection from "./TitleSection";

const pricingItems = [
    {
        plan: "Free Plan",
        price: "$0",
        features: [
            {img: "success", text: "Access to selected free courses."},
            {img: "success", text: "Limited course materials and resources."},
            {img: "success", text: "Basic community support."},
            {img: "success", text: "No certification upon completion."},
            {img: "success", text: "Ad-supported platform."},
            {img: "img_x", text: "Access to exclusive Pro Plan community forums."},
            {img: "img_x", text: "Early access to new courses and updates."},
        ]
    },
    {
        plan: "Pro Plan",
        price: "$79",
        features: [
            {img: "success", text: "Unlimited access to all courses."},
            {img: "success", text: "Unlimited course materials and resources."},
            {img: "success", text: "Priority support from instructors."},
            {img: "success", text: "Course completion certificates."},
            {img: "success", text: "Ad-free experience."},
            {img: "success", text: "Access to exclusive Pro Plan community forums."},
            {img: "success", text: "Early access to new courses and updates."},
        ]
    }
]

function OurPricing() {
    return (
        <div className="flex flex-col gap-10 w-full xl:gap-[60px] xl:max-w-[1279px]
                        2xl:gap-20 2xl:max-w-[1597px] 2xl:h-[1418px]">
            <TitleSection
                title="Our Pricing"
                text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id
                    imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit
                    fringilla feugiat senectus in."
                buttonText="View All"
            />
            <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap w-full h-full
                            px-12 py-12 bg-white gap-[30px] 2xl:gap-[30px]">
                {
                    pricingItems.map(({plan, price, features}) => (
                        <div key={plan} className='flex flex-col items-center justify-center bg-[#FCFCFD]
                                 rounded-xl w-full h-full px-12 py-12 flex-[1_1_calc(50%-20px)] max-w-[100%]
                                 gap-[30px] xl:gap-[50px] 2xl:gap-[50px]'>
                            <div className="flex items-center justify-center font-medium color-[#262626]
                            bg-[#FFEACC] rounded-sm w-full px-2 py-2 2xl:text-[22px] 2xl:rounded-md">{plan}</div>
                            <div className="flex justify-center items-center w-full">
                                <div className="flex color-[#262626] font-semibold text-[50px] xl:text-[60px]
                                                2xl:text-[80px]">{price}</div>
                                <div className="flex color-[#4C4C4D] font-semibold text-sm
                                                xl:text-base 2xl:text-xl ">/month</div>
                            </div>
                            <div className="flex flex-col justify-end items-center bg-white w-full h-full
                                            2xl:rounded-[14px] border-1 border-solid border-[#F1F1F3]">
                                <div className="flex flex-col justify-center items-center w-full h-full
                                                gap-5 px-6 py-6 xl:gap-6 2xl:gap-[30px]">
                                    <div className="flex justify-center font-semibold text-lg color-[#262626]
                                                    w-full 2xl:text-xl">Available Features
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-full h-full
                                    gap-[20px] 2xl:gap-[20px]">
                                        {features.map(({img, text}) => (
                                            <div key={text} className='flex items-center w-full h-full
                                                 gap-[8px] 2xl:gap-[12px] px-0 py-0 rounded-md 2xl:rounded-lg
                                                 border-1 border-solid border-[#F1F1F3]'>
                                                <img src={`img/${img}.png`} className="w-[32px] h-[32px]" alt=""/>
                                                <div className="flex color-[#4C4C4D] font-normal
                                                         text-sm tracking-tighter 2xl:text-lg">{text}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="flex justify-center items-center font-semibold text-sm
                                color-white bg-[#FF9500] w-full py-2 2xl:text-lg">Get Started
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default OurPricing;