import React from 'react';
import CourseDetails from './CourseDetails';
import Curriculum from './Curriculum';
import TitleSection from './TitleSection';
import { frontEndWeb } from '../types/curriculum';

interface Front_End_WebProps {
  onNavigateToFront_End_WebPage: ()=> void;
}

const Front_End_Web: React.FC<Front_End_WebProps> = ({onNavigateToFront_End_WebPage}) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[30px] 2xl:px-9 2xl:h-[1027px]
      bg-white"
    >
      <TitleSection
        title="Front-End Web Development"
        text="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and 
           popular frameworks like Bootstrap and React. Build interactive and responsive websites."
        title_but="View Course" 
        onButtonClick={onNavigateToFront_End_WebPage}    
        className="2xl:w-[160px] 2xl:h-[63px] bg-[#F1F1F3]"
      />
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex gap-[30px]">
          <img src="/img/web_des1.png" alt="img" />
          <img src="/img/web_des2.png" alt="img" />
          <img src="/img/web_des3.png" alt="img" />
        </div>
      </div>
      <CourseDetails
        term="10 Weeks"
        level="Intermediate"
        teacher="By Michael Adams"
      />
      <Curriculum items={frontEndWeb} />
    </div>
  );
};

export default Front_End_Web;