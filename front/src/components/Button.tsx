import React from "react";

function Button({title_but}) {
    return (
        <div className="flex justify-center items-center font-normal w-[86px] h-[34px] rounded-md
        text-sm 2xl:w-[107px] 2xl:h-[43px] 2xl:rounded-lg 2xl:text-lg
         border-1 border-solid border-[#F1F1F3]">{title_but}</div>
    );
}

export default Button;