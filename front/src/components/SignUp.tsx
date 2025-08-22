import React, { useState } from "react";
import { FormState, FormErrors } from "../types/form";

interface Props {}

const SignUp: React.FC<Props> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
    e.preventDefault();

    const newErrors: FormErrors = {};
    let valid = true;
    if(!form.fullName){
      newErrors.fullNane = "Ім'я не може бути пустим";
      valid = false;
    }
    if(!form.email){
      newErrors.email = "Email не може бути пустим";
      valid = false;
    }
    if(!form.password){
      newErrors.password = "Пароль не може бути пустим";
      valid = false;
    }
    setErrors(newErrors);
    if(!valid) return;
    
    if(form.fullName){
      localStorage.setItem("fullName", form.fullName);
    }

    if(form.email){
      localStorage.setItem("email", form.email);
    }
    if(form.password){
     localStorage.setItem("password", form.password);
    }

    console.log("Sign Up Data:", {
      fullName: form.fullName,
      email: form.email,
      password: form.password,
    });
    setForm({fullName: "", email: "", password: ""});
  }
  
  return (
    <div
      className="flex flex-col gap-[30px] xl:gap-10 2xl:gap-[50px] w-full h-full xl:w-[540px] 2xl:w-[660px]
              py-6 xl:py-8 2xl:py-10 bg-white outline-1 outline-emerald-700"
    >
      <div className="flex flex-col items-center gap-2 2xl:gap-3 w-full h-full xl:px-8 2xl:px-10 outline-1 outline-red-700">
        <div
          className="flex justify-center items-center font-semibold text-[28px] xl:text-[38px] 2xl:text-[48px]
                      outline-1 outline-emerald-700"
        >
          Sign Up
        </div>
        <div className="flex text-[#4C4C4D] font-medium xl:text-base 2xl:text-lg outline-1 outline-emerald-700">
          Create an account to unlock exclusive features.
        </div>
      </div>
      <div
        className="flex flex-col gap-6 2xl:gap-[30px] w-full h-full xl:px-8 2xl:px-10
                  font-medium text-sm xl:text-base 2xl:text-lg outline-1 outline-red-700"
      >
        <form onSubmit={handleSubmit}
           className="flex flex-col gap-5 2xl:gap-6 outline-1 outline-blue-700">
          <div className="flex flex-col gap-[10px] 2xl:gap-[14px] outline-1 outline-emerald-700">
            <div className="flex text-[#262626] ">Full Name</div>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => setForm((prev)=> ({...prev, fullName: e.target.value}))}
              className="flex bg-[#F1F1F3] rounded-[10px]  px-5 py-5 2xl:px-6 
                                  2xl:py-6"
              placeholder="Enter your Name"
            />
          </div>
          <div className="flex flex-col gap-[10px] 2xl:gap-[14px] outline-1 outline-emerald-700">
            <div className="flex text-[#262626] ">Email
               {errors.email && (
                  <div className="text-red-500">- {errors.email}</div>
                )}
            </div>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({...prev, email: e.target.value}))}
              className="flex bg-[#F1F1F3] rounded-[10px]  px-5 py-5 2xl:px-6 2xl:py-6"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-[10px] 2xl:gap-[14px] outline-1 outline-emerald-700">
            <div className="flex text-[#262626]">Password
              {errors.password && (
                <span className="text-red-500 ml-2">- {errors.password}</span>
              )}
            </div>
            <div className="flex 2xl:gap-[10px] relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) =>setForm((prev) => ({...prev, password: e.target.value}))}
                className="flex w-full bg-[#F1F1F3] rounded-[10px] px-5 py-5
                                          2xl:px-6 2xl:py-6"
                placeholder="Enter your Password"
              />
              <img
                src={showPassword ? "/icons/eye_open.svg" : "/icons/passw.svg"}
                className="flex absolute w-[24px] h-[24px] right-4 top-1/2 -translate-y-1/2"
                alt="icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <div
              className="flex items-center justify-end text-[#4C4C4D]
                         outline-1 outline-emerald-700"
            ></div>
          </div>
          <div className="flex items-center gap-2 2xl:gap-[10px]">
            <input type="checkbox" className="flex 2xl:w-[22px] 2xl:h-[22px]" />
            <div className="flex text-[#656567] font-normal text-lg">
              I agree with <a className="mx-1 underline offset">Terms of Use</a>
              and
              <a className="mx-1 underline offset">Privacy Policy</a>
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center px-5 py-5 2xl:px-6 2xl:py-5 w-full
                     rounded-[10px] cursor-pointer bg-[#FF9500] text-white "
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center gap-4 w-full outline-1 outline-emerald-700">
          <div className="flex-grow h-px bg-[#E4E4E7]"></div>
          <div className="text-lg font-normal text-[#98989A]">OR</div>
          <div className="flex-grow h-px bg-[#E4E4E7]"></div>
        </div>
        <button className="flex justify-center gap-[14px] 2xl:gap-[14px] px-30 py-4 2xl:px-40 2xl:py-5 rounded-[10px] cursor-pointer bg-[#F1F1F3]">
          <img src="/icons/google.svg" alt="" />
          <div className="flex font-normal text-lg text-[#262626]">
            Login with Google
          </div>
        </button>
        <button className="flex justify-center items-center gap-[6px] 2xl:gap-[6px]">
          <div>
            Already have an account? Login{" "}
            <a className="underline cursor-pointer">Sign Up</a>
          </div>
          <img src="/icons/out_up.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default SignUp;
