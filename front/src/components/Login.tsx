import React, { useState } from "react";
import { FormState, FormErrors } from "../types/form";
import { useNavigate } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    password: "",
    rememberMe: false,
    isChecked: false,
  });

  const handleLogin = (): void => {
    const saveEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (form.email !== saveEmail || form.password !== savedPassword) {
      alert("Невірний email або пароль");
      return;
    }
    navigate("/");
  };
  const handleSignUpClick = (): void => {
    navigate("/signUp_page");
  }

  return (
    <div
      className="flex flex-col gap-[30px] xl:gap-10 2xl:gap-[50px] w-full h-full sm:w-[300px] lg:w-[520px] xl:w-[540px] 2xl:w-[660px]
                py-6 xl:py-8 2xl:py-10 bg-white">
      <div className="flex flex-col items-center gap-2 2xl:gap-3 w-full h-full xl:px-8 2xl:px-10">
        <div className="flex justify-center items-center font-semibold text-[28px] xl:text-[38px] 2xl:text-[48px]">
          Login
        </div>
        <div className="flex text-center text-[#4C4C4D] font-medium xl:text-base 2xl:text-lg">
          Welcome back! Please log in to access your account.
        </div>
      </div>
      <div
        className="flex flex-col gap-6 2xl:gap-[30px] w-full h-full px-4 sm:px-4 lg:px-4 xl:px-4 2xl:px-4
                    font-medium text-sm xl:text-base 2xl:text-lg">
        {!forgotPasswordMode ? (
          <form
            className="flex flex-col gap-5 2xl:gap-6 w-full h-full xl:px-4 2xl:px-4">
            <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
              <div className="flex text-[#262626] ">
                Email
                {errors.email && (
                  <div className="text-red-500">- {errors.email}</div>
                )}
              </div>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="flex bg-[#F1F1F3] rounded-[10px]  px-5 py-5 2xl:px-6 
                                        2xl:py-6"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
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
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, password: e.target.value }))
                  }
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
              <div className="flex items-center justify-end text-[#4C4C4D]">
                <button type="button" className="cursor-pointer">Forgot Password?</button>
              </div>
            </div>
            <div className="flex items-center gap-2 2xl:gap-[10px]">
              <input
                type="checkbox"
                checked={form.rememberMe}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, rememberMe: e.target.checked }))
                }
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
            <button className="bg-blue-500 text-white py-2 rounded">
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

        <div className="flex items-center gap-4 w-full">
          <div className="flex-grow h-px bg-[#E4E4E7]"></div>
          <div className="text-lg font-normal text-[#98989A]">OR</div>
          <div className="flex-grow h-px bg-[#E4E4E7]"></div>
        </div>
        <button
          className="flex justify-center gap-[14px] 2xl:gap-[14px] px-30 py-4 2xl:px-40 
              2xl:py-5 rounded-[10px] cursor-pointer bg-[#F1F1F3]">
          <img src="/icons/google.svg" alt="" />
          <div className="flex items-center font-medium text-sm 2xl:font-normal 2xl:text-lg text-[#262626]">
            Login with Google
          </div>
        </button>
        <button onClick={handleSignUpClick}
            className="flex justify-center items-center gap-[6px] 2xl:gap-[6px] cursor-pointer">
          <div>
            Don’t have an account?{" "}
            <a className="underline">Sign Up</a>
          </div>
          <img src="/icons/out_up.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Login;
