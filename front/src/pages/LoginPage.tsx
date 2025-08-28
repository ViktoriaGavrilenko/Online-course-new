import React from "react";
import Login from "../components/Login";
import CarouselTestimonial from "../components/CarouselTestimonial";
import { testimonialsItems } from "../components/OurTestimonials";

function LoginPage() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-[50px] sm:gap-10 lg:gap-15 xl:gap-20 
          2xl:gap-[100px] w-full">
      <div className="order-2 sm:order-1">
        <CarouselTestimonial
          items={testimonialsItems}
          cardClassName="flex gap-10"
        />
      </div>
      <div className="order-1 sm:order-2">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
