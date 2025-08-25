import React from "react";

interface OneTestimonialProps {
    description: string;
    img: string;
    name: string;
    index:number;
    className?: string;
    buttonText?: string;
}

const OneTestimonial: React.FC<OneTestimonialProps> = ({description,img,name,index, className, buttonText}) => {
    return (
        <div key={index} className={`flex flex-col items-center justify-center bg-white
                                   w-full h-full rounded-[10px] flex-[1_1_calc(50%-20px)] max-w-[100%]
                                   xl:rounded-[10px] 2xl:rounded-xl ${className}`}>
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
                    <img src={`img/${img}.png`} alt={name}/>
                    <div className="flex font-semibold color-[#333333] text-base 2xl:text-lg">
                        {name}
                    </div>
                </div>
                <button className="flex items-center justify-center font-medium bg-[#F1F1F3]
                                px-2 py-2 text-sm xl:px-2 xl:py-2 2xl:px-2 2xl:py-1 2xl:text-lg">
                       {buttonText || "Read Full Story"}             
                </button>
            </div>
        </div>
    );
}

export default OneTestimonial;