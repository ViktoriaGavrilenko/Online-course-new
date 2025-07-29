import React from "react";

function Hero() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center gap-10 lg:gap-14">
            <div className="flex flex-col items-center gap-6 text-center max-w-4xl w-full">
                <div className="relative flex items-center justify-center gap-2 sm:gap-4 bg-white rounded-lg
                    sm:rounded-xl px-4 py-2 sm:px-6 sm:py-4">
                    <img src="/icons/unlock.png" alt="unlock" className="h-6 sm:h-8"/>
                    <h1 className="text-[#FF9500] font-semibold text-lg sm:text-3xl lg:text-5xl">
                        Unlock
                    </h1>
                    <h1 className="text-[#262626] font-semibold text-lg sm:text-3xl lg:text-5xl">
                        Your Creative Potential
                    </h1>
                    <img
                        src="/icons/Abstract Line.png"
                        alt="decor"
                        className="absolute -left-4 -top-4 w-8 sm:-left-6 sm:-top-6 sm:w-10"
                    />
                </div>

                {/* Подзаголовок */}
                <div className="flex flex-col gap-2 sm:gap-3">
                    <p className="text-xl sm:text-2xl lg:text-[32px] font-medium">
                        with Online Design and Development Courses.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-normal text-gray-700">
                        Learn from Industry Experts and Enhance Your Skills.
                    </p>
                </div>
            </div>

            {/* Кнопки */}
            <div className="flex gap-4 flex-wrap justify-center">
                <button
                    className="bg-[#FF9500] text-white font-semibold rounded-md sm:rounded-lg px-6 py-3
                    text-sm sm:text-base lg:text-lg">
                    Explore Courses
                </button>
                <button
                    className="bg-white text-[#262626] font-semibold border border-gray-200 rounded-md
                    sm:rounded-lg px-6 py-3 text-sm sm:text-base lg:text-lg">
                    View Pricing
                </button>
            </div>
        </section>
    );
}

export default Hero;