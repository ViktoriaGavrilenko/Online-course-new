import React from 'react';
import Hero from "../components/Hero.jsx";
import ContainerIcons from "../components/ContainerIcons.jsx";
import ContainerVideo from "../components//ContainerVideo.jsx";
import Benefits from "../components/Benefits.jsx";
import OurCourses from "../components/OurCourses.jsx";
import OurTestimonials from "../components/OurTestimonials.jsx";
import OurPricing from "../components/OurPricing.jsx";
import Questions from "../components/Questions.jsx";

const Home = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center w-full max-w-[1280px]
        2xl:gap-[70px] 2xl:max-w-[1595px] mx-auto">
            <Hero/>
            <ContainerIcons/>
            <ContainerVideo/>
            <Benefits/>
            <OurCourses/>
            <OurTestimonials/>
            <OurPricing/>
            <Questions/>
        </div>
    )
}
export default Home;