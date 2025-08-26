import React from "react";
import Login from "../components/Login";
import CarouselTestimonial from "../components/CarouselTestimonial";
import { testimonialsItems } from "../components/OurTestimonials";

function LoginPage() {
    return (
       <div className="flex items-center gap-[100px]">
             <div className="w-2/3">
               <CarouselTestimonial
                 items={testimonialsItems}
                 cardClassName="flex gap-10"
               />
             </div>
             <div className="w-1/3">
               <Login />
             </div>
           </div>
    );
}

export default LoginPage;