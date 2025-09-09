import React from "react";
import { ButtonProps } from "../types/button";

const Button: React.FC<ButtonProps> = ({ title_but, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center font-normal w-[86px] h-[34px] rounded-md
        text-sm 2xl:w-[107px] 2xl:h-[43px] 2xl:rounded-lg 2xl:text-lg
         border-1 border-solid border-[#F1F1F3] cursor-pointer ${className}`}
    >
      {title_but}
    </button>
  );
};

export default Button;
