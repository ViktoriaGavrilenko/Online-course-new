import React, { useState } from "react";
import OneTestimonial from "./OneTestimonial";
import TitleSection from "./TitleSection";

interface Testimonial {
  description: string;
  img: string;
  name: string;
}
interface CarouselTestimonialProps {
  items: Testimonial[];
  cardClassName?: string;
}

const CarouselTestimonial: React.FC<CarouselTestimonialProps> = ({
  items,
  cardClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };
  const currentTestimonial = items[currentIndex];

  return (
    <div className={`flex flex-col items-center gap-4 xl:gap-[10px] 2xl:gap-[15px] px-2 xl:px-4 
    2xl:px-10 ${cardClassName}`}>
      <TitleSection
        title="Students Testimonials"
        text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet
                    et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
                    senectus in."
        buttonText=""
      />
      <OneTestimonial
        {...currentTestimonial}
        index={currentIndex}
        className={cardClassName}
        buttonText="Read More"
      />
      <div className="flex justify-end items-center xl:gap-[10px] 2xl:gap-[15px] px-2 xl:px-4 2xl:px-6">
        <button
          onClick={prevSlide}
          className="flex px-2 py-2 xl:px-3 xl:py-3 2xl:px-3.5 2xl:py-3.5 rounded-lg bg-white"
        >
          <img src="/icons/out_left.svg" alt="" />
        </button>
        <button
          onClick={nextSlide}
          className="flex px-2 py-2 xl:px-3 xl:py-3 2xl:px-3.5 2xl:py-3.5 rounded-lg bg-white"
        >
          <img src="/icons/out_right.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default CarouselTestimonial;
