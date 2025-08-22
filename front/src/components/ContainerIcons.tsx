import React from "react";

const iconItems = [
    "Logo (1)", "Logo (2)", "Logo (3)", "Logo (4)", "Logo (5)", "Logo (6)", "Logo (7)"
]

function ContainerIcons() {
    return (
        <div className="w-full py-6 sm:py-8">
            <div className="flex justify-center items-center bg-white w-full h-full px-4 lg:px-8 py-4 lg:py-8">
                {
                    iconItems.map((icon, index) => (
                        <div key={index} className={`flex ${index >= 3 ? "hidden sm:flex" : "flex"}`}>
                            <div className="flex justify-center items-center px-4 2xl:px-12 xl:px-10 py-2
                            sm:py-4 border-l border-[#F1F1F3] border-solid">
                                <img src={`/icons/${icon}.png`} className="h-10 w-auto sm:h-12"
                                     alt=""/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}

export default ContainerIcons;