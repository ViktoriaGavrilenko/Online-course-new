import React from "react";
import Button from "./Button";

interface TitleSectionProps {
  title: string;
  text: string;
  title_but: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  text,
  title_but,
  onButtonClick,
  className
}) => {

  return (
    <div
      className="flex flex-col justify-start w-full px-3 sm:flex-row sm:items-end sm:justify-between
                        xl:px-3 2xl:px-3"
    >
      <div
        className="flex flex-col items-start gap-1 w-full h-full xl:max-w-[933px]
                            2xl:gap-[6px] 2xl:max-w-[1177px]"
      >
        <div className="flex font-semibold text-[28px] xl:text-[38px] 2xl:text-[48px]">
          {title}
        </div>
        <div className="font-normal text-sm xl:text-base 2xl:text-lg">
          {text}
        </div>
      </div>
        <Button
          onClick={onButtonClick}
          title_but={title_but}
          className={`flex justify-center items-center font-normal w-[86px] h-[34px] rounded-md
           text-sm 2xl:w-[107px] 2xl:h-[43px] 2xl:rounded-lg 2xl:text-lg
           border-1 border-solid border-[#F1F1F3] ${className}`}
        />
    </div>
  );
};
export default TitleSection;
