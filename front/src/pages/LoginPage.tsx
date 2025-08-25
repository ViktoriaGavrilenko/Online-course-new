import React from "react";
import Login from "../components/Login";
import TitleSection from "../components/TitleSection";

function LoginPage() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px] xl:gap-20 2xl:gap-25 w-full h-full
         xl:max-w-[1279px] 2xl:max-w-[1589px] 2xl:h-[898px] mx-auto">
            <div className="flex flex-col xl:gap-[60px] 2xl:gap-20 w-full xl:w-[659px] 2xl:w-[829px]">
                <TitleSection
                    title="Students Testimonials"
                    text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet
                    et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
                    senectus in."
                    buttonText=""
                />
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-center justify-center bg-white
                                   w-full h-full rounded-[10px] flex-[1_1_calc(50%-20px)] max-w-[100%]
                                   xl:rounded-[10px] 2xl:rounded-xl">
                        <div className="flex items-center justify-center w-full h-full
                                            px-2 xl:px-4 2xl:px-6 py-2 xl:py-4 2xl:py-6">
                            <div className="flex font-normal leading-[150%] text-sm w-full h-full px-2 xl:px-4
                                 2xl:px-6 py-2 xl:py-4 2xl:py-6 xl:text-base xl:tracking-normal 2xl:text-lg
                                 2xl:tracking-[1px]">The web design course provided a solid foundation for me.
                                The instructors were knowledgeable and supportive, and the interactive learning
                                environment was engaging. I highly recommend it!</div>
                        </div>
                        <div className="flex justify-center items-center w-full h-full px-2 xl:px-4
                                 2xl:px-6 py-2 xl:py-4 2xl:py-6 bg-[#FCFCFD]">
                            <div className="flex items-center gap-[10px] w-full h-full xl:gap-[10px] 2xl:gap-[15px]
                                                px-2 py-0 xl:px-2 xl:py-0 2xl:px-2 2xl:py-0">
                                <img src="/img/person1.png" alt=""/>
                                <div className="flex font-semibold color-[#333333] text-base 2xl:text-lg">
                                    Sarah L
                                </div>
                            </div>
                            <button className="flex items-center justify-center font-medium bg-[#F1F1F3]
                                px-2 py-2 text-sm xl:px-2 xl:py-2 2xl:px-2 2xl:py-1 2xl:text-lg">Read Full Story
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end items-center xl:gap-[10px] 2xl:gap-[15px] px-2 xl:px-4 2xl:px-6">
                        <button
                         
                         className="flex px-2 py-2 xl:px-3 xl:py-3 2xl:px-3.5 2xl:py-3.5 rounded-lg bg-white">
                            <img src="/icons/out_left.svg" alt=""/>
                        </button>
                        <button 
                        
                        className="flex px-2 py-2 xl:px-3 xl:py-3 2xl:px-3.5 2xl:py-3.5 rounded-lg bg-white">
                            <img src="/icons/out_right.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <Login/>
        </div>
    );
}

export default LoginPage;