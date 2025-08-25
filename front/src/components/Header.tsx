import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = (): void => {
    navigate("login_page");
  };
  const handleSignUpClick = (): void => {
    navigate("signUp_page");
  };
  const handleHomeClick = (): void => {
    navigate("/");
  };

  return (
    <header className="flex flex-col items-center gap-12 w-full">
      <div
        className="flex w-full items-center justify-center bg-orange-400
            rounded-md 2xl:rounded-lg h-[41px] md:h-[41px] 2xl:h-[55px]"
      >
        <span className="flex gap-6 text-white font-normal text-sm 2xl:text-lg">
          Free Courses 🌟 Sale Ends Soon, Get It Now
          <img src="/icons/arrow_left.svg" alt="arrow" />
        </span>
      </div>
      <div
        className="w-full mx-auto
                            h-[73px] xl:h-[81px] 2xl:h-[99px]
                            flex justify-between items-center"
      >
        <div className="flex items-center gap-[50px] w-[390px] xl:w-[502px] 2xl:w-[597px]">
          <button onClick={handleHomeClick} className="cursor-pointer">
            <img
              src="/img/Logo.png"
              alt="logo"
              className="h-[45px] 2xl:h-[55px]"
            />
          </button>
          <div className="hidden sm:block">
            <Navbar />
          </div>
        </div>
        <div
          className="flex gap-5 xl:gap-[30px] w-[151px] h-[45px] xl:w-[169px] xl:h-[45px]
                2xl:w-[214px] 2xl:h-[55px]"
        >
          <button
            className="flex items-center justify-center
                                       font-normal text-[#262626]
                                       text-sm 2xl:text-lg
                                       rounded-md 2xl:rounded-lg
                                       w-full h-full cursor-pointer"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          <button
            className="flex items-center justify-center
                                       font-normal text-white bg-orange-400
                                       text-sm 2xl:text-lg
                                       rounded-md 2xl:rounded-lg
                                       w-full h-full cursor-pointer"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
