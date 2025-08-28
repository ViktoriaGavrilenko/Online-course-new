import React from "react";

interface TitleSectionProps {
  title: string;
  text: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  text,
  buttonText,
  onButtonClick,
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
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="flex justify-center items-center font-medium px-4 py-2 rounded-md text-sm
                  xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-3 2xl:text-lg 2xl:rounded-lg bg-[#FCFCFD]"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};
export default TitleSection;
