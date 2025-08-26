import React, { useState } from "react";
import SignUp from "../components/SignUp";
import CarouselTestimonial from "../components/CarouselTestimonial";
import { testimonialsItems } from "../components/OurTestimonials";

interface Props {}

const SighUpPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center gap-[100px]">
      <div className="w-2/3">
        <CarouselTestimonial
          items={testimonialsItems}
          cardClassName="flex gap-10"
        />
      </div>
      <div className="w-1/3">
        <SignUp />
      </div>
    </div>
  );
};

export default SighUpPage;
