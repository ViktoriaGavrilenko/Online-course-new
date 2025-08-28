import React from 'react';
import Hero from "../components/Hero";
import ContainerIcons from "../components/ContainerIcons";
import ContainerVideo from "../components//ContainerVideo";
import Benefits from "../components/Benefits";
import OurCourses from "../components/OurCourses";
import OurTestimonials from "../components/OurTestimonials";
import OurPricing from "../components/OurPricing";
import Questions from "../components/Questions";

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