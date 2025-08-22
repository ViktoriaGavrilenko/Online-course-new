import React from 'react';
import Hero from "../components/Hero.tsx";
import ContainerIcons from "../components/ContainerIcons.tsx";
import ContainerVideo from "../components//ContainerVideo.tsx";
import Benefits from "../components/Benefits.tsx";
import OurCourses from "../components/OurCourses.tsx";
import OurTestimonials from "../components/OurTestimonials.tsx";
import OurPricing from "../components/OurPricing.tsx";
import Questions from "../components/Questions.tsx";

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