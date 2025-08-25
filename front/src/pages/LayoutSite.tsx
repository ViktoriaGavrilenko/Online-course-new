import React from "react";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";

const LayoutSite = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 bg-gray-50 w-full mx-auto">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>

    )
}
export default LayoutSite;