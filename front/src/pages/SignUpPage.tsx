import React, {useState} from 'react';
import SignUp from '../components/SignUp';
import CarouselTestimonial from '../components/CarouselTestimonial';
import { testimonialsItems } from '../components/OurTestimonials'; 

interface Props {}

const SighUpPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
     <div className="flex gap-[100px] items-center outLine-1 outline-yelow-500">
               
      <CarouselTestimonial items={testimonialsItems} cardClassName='flex gap-10'/>
      <SignUp/>
    </div>
  );
};

export default SighUpPage;