import React from "react";
import {Link} from "react-router-dom";

const navbarItems = [
    {to:"/", label:"Home"},
    {to:"/online_courses", label:"Courses"},
    {to:"/about", label:"About Us"},
    {to:"/pricing", label:"Pricing"},
    {to:"/contact", label:"Contact"},
]

const Navbar = ()=>{
    return (
        <nav>
            <ul className="flex items-center justify-center list-none gap-5 h-full xl:h-[45px] 2xl:h-[55px]
            w-full xl:w-[408px] 2xl:w-[500px]">
                {
                    navbarItems.map(({to,label})=> (
                        <li key={to} className="flex bg-gray-100 xl:rounded-md 2xl:rounded-lg
                        w-full h-full">
                            <Link to={to} className="flex justify-center items-center w-full h-full
                            px-auto  py-auto">
                                <div className="text-black px-2 py-2 xl:px-0 xl:py-0 font-normal text-[10px]
                                xl:text-sm 2xl:text-lg">
                                    {label}</div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Navbar;