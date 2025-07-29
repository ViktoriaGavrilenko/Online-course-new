import React from "react";
import {Link} from "react-router-dom";

const bottomNavItems = [
    {
        title: "Home",
        nav_item1: "Benefits",
        nav_item2: "Our Courses",
        nav_item3: "Our Testimonials",
        nav_item4: "Our FAQ"
    },
    {title: "About Us", nav_item1: "Company", nav_item2: "Achievements", nav_item3: "Our Goals"}
]

const Footer = () => {
    return (
        <container className="flex flex-col justify-center items-center w-full 2xl:max-w-[1920px]
                              gap-5 xl:gap-7 2xl:gap-12 bg-white">
            <div className="flex flex-col justify-between w-full md:flex-row px-24 py-12">
                <div className="flex flex-col px-2 gap-[30px] h-[170px] xl:w-[304px] xl:h-[174px]
                                2xl:w-[392px] 2xl:h-[215px] xl:gap-7 2xl:gap-10">
                    <img src="/img/Logo.png" className="w-[44px] h-[44px] 2xl:w-[54px] 2xl:h-[54px]"
                         alt="logo"/>
                    <div className="flex flex-col gap-3 w-full xl:gap-[14px] 2xl:gap-5 whitespace-nowrap">
                        <div className="flex items-start gap-[6px] w-full xl:gap-1 2xl:gap-[6px]">
                            <img src="/icons/email.png" alt="icon"/>
                            <div className="font-normal text-[#262626] text-[15px] xl:text-base 2xl:text-lg">
                                hello@skillbridge.com
                            </div>
                        </div>
                        <div className="flex items-start gap-[6px] w-[193px] h-[24px] xl:w-[197px] xl:h-[24px]
                                        xl:gap-1 2xl:w-[225px] 2xl:h-[27px] 2xl:gap-[6px]">
                            <img src="/icons/phone.svg" className="xl:w-[20px] xl:h-[24px] 2xl:w-[24px]
                                     2xl:h-[24px]" alt="icon"/>
                            <div className="font-normal text-[#262626] xl:text-base 2xl:text-lg">
                                +91 91813 23 2309
                            </div>
                        </div>
                        <div className="flex items-start gap-[6px] w-[193px] h-[24px] xl:w-[197px] xl:h-[24px]
                                        xl:gap-1 2xl:w-[225px] 2xl:h-[27px] 2xl:gap-[6px]">
                            <img src="/icons/map.png" className="xl:w-[20px] xl:h-[24px] 2xl:w-[24px]
                            2xl:h-[24px]" alt="icon"/>
                            <div className="font-normal text-[#262626] xl:text-base 2xl:text-lg">
                                Somewhere in the World
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full md:flex-row xl:w-[737px] 2xl:w-[807px]">
                    <div className="flex flex-row w-full h-full">
                        {
                            bottomNavItems.map(({title, nav_item1, nav_item2, nav_item3, nav_item4}) => (
                                <nav key={title} className="flex flex-col justify-start gap-1 w-full h-full
                                                            xl:gap-[10px] 2xl:gap-[14px]">
                                    <Link className="flex font-semibold text-lg w-full 2xl:text-xl
                                                     text-[#262626]">{title}</Link>
                                    <Link className="flex font-normal text-sm w-full xl:text-base 2xl:text-lg
                                                     text-[#262626]">{nav_item1}</Link>
                                    <Link className="flex font-normal text-sm xl:text-base xl:w-[229px]
                                                     2xl:w-[249px] 2xl:text-lg text-[#262626]">{nav_item2}</Link>
                                    <Link className="flex font-normal text-sm xl:text-base xl:w-[229px]
                                                     2xl:w-[249px] 2xl;text-lg text-[#262626]">{nav_item3}</Link>
                                    <Link className="flex font-normal text-sm xl:text-base xl:w-[229px]
                                                     2xl:w-[249px] 2xl:text-lg text-[#262626]">{nav_item4}</Link>
                                </nav>
                            ))
                        }
                    </div>
                    <div className="flex flex-col justify-start gap-9 w-full h-full">
                        <div className="flex font-semibold text-[20px]">Social Profiles</div>
                        <div className="flex justify-start items-center gap-[10px] 2xl:gap-[14px] mt-[-25px]">
                            <button className="flex items-center justify-center px-4 py-4 bg-[#F7F7F8]">
                                <img src="/icons/f.png" alt="icon"/>
                            </button>
                            <button className="flex items-center justify-center px-4 py-4 bg-[#F7F7F8]">
                                <img src="/icons/twit.png" alt="icon"/>
                            </button>
                            <button className="flex items-center justify-center px-4 py-4 bg-[#F7F7F8]">
                                <img src="/icons/linc.png" alt="icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[clamp(390px,80vw,1595px)] h-px bg-[#F1F1F3] mx-auto"></div>
            <div className="flex sm:ju font-normal text-sm 2xl:text-lg text-[#656567]">
                © 2023 Skillbridge. All rights reserved.
            </div>
        </container>
    )
}
export default Footer;