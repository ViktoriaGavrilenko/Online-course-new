import React, { useState } from "react";
import {FormState, FormErrors } from "../types/form";
import { useNavigate } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let valid = true;
    const newErrors: FormErrors = {};
    if (!form.email) {
      newErrors.email = "Email не може бути пустим";
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Додайте корректний email";
        valid = false;
      } 
    }
    if (!form.password) {
      newErrors.password = "Додайте пароль";
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Пароль має бути не менше 6 символів";
    } 
    setErrors(newErrors);
    if(!valid) return;
    console.log(form.email, form.password, form.rememberMe );
    
    setForm({email: "", password: "", rememberMe: false});
  };

  const handleLogin = (): void => {
    const saveEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (form.email !== saveEmail || form.password !== savedPassword) {
      alert("Невірний email або пароль");
      return;
    }
    navigate("/");
  };

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
          Login
        </div>
        <div className="flex text-[#4C4C4D] font-medium xl:text-base 2xl:text-lg outline-1 outline-emerald-700">
          Welcome back! Please log in to access your account.
        </div>
      </div>
      <div
        className="flex flex-col gap-6 2xl:gap-[30px] w-full h-full xl:px-8 2xl:px-10
                    font-medium text-sm xl:text-base 2xl:text-lg outline-1 outline-red-700"
      >
        {!forgotPasswordMode ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 2xl:gap-6 outline-1 outline-blue-700"
          >
            <div className="flex flex-col gap-[10px] 2xl:gap-[14px] outline-1 outline-emerald-700">
              <div className="flex text-[#262626] ">
                Email
                {errors.email && (
                  <div className="text-red-500">- {errors.email}</div>
                )}
              </div>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev)=> ({...prev, email: e.target.value}))}
                className="flex bg-[#F1F1F3] rounded-[10px]  px-5 py-5 2xl:px-6 
                                        2xl:py-6"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col gap-[10px] 2xl:gap-[14px] outline-1 outline-emerald-700">
              <div className="flex text-[#262626]">
                Password
                {errors.password && (
                  <div className="text-red-500">- {errors.password}</div>
                )}
              </div>
              <div className="flex 2xl:gap-[10px] relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm((prev)=> ({...prev, password: e.target.value}))}
                  className="flex w-full bg-[#F1F1F3] rounded-[10px] px-5 py-5
                                            2xl:px-6 2xl:py-6"
                  placeholder="Enter your Password"
                />
                <img
                  src={
                    showPassword ? "/icons/eye_open.svg" : "/icons/passw.svg"
                  }
                  className="flex absolute w-[24px] h-[24px] right-4 top-1/2 -translate-y-1/2"
                  alt="icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <div
                className="flex items-center justify-end text-[#4C4C4D]
                           outline-1 outline-emerald-700"
              >
                <button>Forgot Password?</button>
              </div>
            </div>
            <div className="flex items-center gap-2 2xl:gap-[10px]">
              <input
                type="checkbox"
                checked={form.rememberMe}
                onChange={(e) => setForm((prev)=>({...prev, rememberMe: e.target.checked}))}
                className="flex 2xl:w-[22px] 2xl:h-[22px]"
              />
              <div className="flex text-[#656567]">Remember Me</div>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="flex justify-center items-center px-5 py-5 2xl:px-6 2xl:py-5 w-full
                       rounded-[10px] cursor-pointer bg-[#FF9500] text-white "
            >
              Login
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-center">Введіть email для відновлення пароля:</p>
            <input
              type="email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              placeholder="Enter your Email"
              className="px-4 py-2 rounded border"
            />
            <button
              
              className="bg-blue-500 text-white py-2 rounded"
            >
              Send Reset Email
            </button>
            <button
              onClick={() => setForgotPasswordMode(false)}
              className="text-gray-500 underline mt-2"
            >
              Back to Login
            </button>
          </div>
        )}

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
            Don’t have an account?{" "}
            <a className="underline cursor-pointer">Sign Up</a>
          </div>
          <img src="/icons/out_up.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Login;
