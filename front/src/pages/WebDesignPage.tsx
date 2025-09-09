import React from 'react';
import WebDesign from './../components/WebDesign';

interface Props {}
const webDesignItems = [
    {title:"Introduction to HTML", lesson:"Lesson 01",img:"watch", time:"45 Minutes"},
    {title:"Styling with CSS", lesson:"Lesson 02",img:"watch", time:"1 Hour"},
    {title:"Introduction to Responsive Design", lesson:"Lesson 03",img:"watch", time:"45 Minutes"},
]

const WebDesignPage: React.FC<Props> = () => {
  return (
     <div className="flex flex-col gap-20 bg-grey-50">
      <div className="flex justify-around gap-60">
        <div className="flex font-semibold text-[48px] 2xl:w-[748xp] 2xl:h-[144px">
          Web Design Fundamentals
        </div>
        <div
          className="flex 2xl:w-[600px] 2xl:h-[108px]"
        >
        Learn the fundamentals of web design, including HTML, CSS, and responsive design principles.
        Develop the skills to create visually appealing and user-friendly websites. </div>
      </div>
      <div className='flex justify-center'>
        <img src="img/ui_ux_design_video.png" alt="" />
      </div>
      <div className='flex flex-col items-center gap-[50px] px-8 2xl:w-[783px] 2xl:h-[698px] outline-1 outline-red-400'>
        <div className='flex justify-end 2xl:w-[683px] font-bold text-[80px] text-[#262626] 
             outline-1 outline-amber-500'>01</div>
        <div className='flex 2xl:w-[683px] font-semibold text-2xl text-[#333333] outline-1
            outline-amber-400'>Introduction to UI/UX Design</div>
        <div className='flex flex-col gap-5 2xl:w-[683px] 2xl:h-[403px] tracking-wide outline-1 outline-blue-900'>
           {webDesignItems.map(({title, lesson, img, time}, index) => (
            <div key={index} className='flex items-center justify-center gap-[6px] 2xl:w-[683px] 2xl:h-[111px] 
                border-1 border-[#F1F1F3]'>
               <div className='flex flex-col gap-[6px] 2xl:w-[464px] outline-1 outline-amber-500'>
                 <div className='flex font-medium text-xl'>{title}</div>
                 <div className='flex font-normal text-lg'>{lesson}</div>
               </div>
               <div className='flex items-center justify-center 2xl:w-[153px] 2xl:h-[48px] bg-[#F7F7F8]'>
                <img src={`icons/${img}.svg`} alt="" />
                <div className='flex font-normal text-lg text-[#59595A]'>{time}</div>
               </div>
            </div>
           ))}    
        </div>
      </div>
    </div>
  );
};

export default WebDesignPage;