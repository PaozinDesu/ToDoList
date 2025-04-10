"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="flex w-full select-none items-center justify-center">
      <form className="flex min-w-[600px] flex-col gap-4 rounded-3xl bg-white p-9">
        <h1 className="text-3xl font-semibold text-slate-800">Register</h1>
        <div className="containerInputDefault">
          <p>Email</p>
          <input required className="inputDefault" type="text" placeholder="Youremail@domain.com" />
        </div>
        <div className="containerInputDefault">
          <p>User name</p>
          <input required className="inputDefault" type="text" placeholder="Your name" />
        </div>

        <div className="containerInputDefault">
          <p>Password</p>
          <div className="flex items-center">
            <input
              required
              className="inputDefault w-full"
              type={`${showPassword ? "password" : "text"}`}
              placeholder="Your password"
            />
            {showPassword ? (
              <EyeClosed
                onClick={() => setShowPassword(false)}
                size={24}
                className="ml-[-32px] cursor-pointer text-slate-600"
              />
            ) : (
              <Eye
                onClick={() => setShowPassword(true)}
                size={24}
                className="ml-[-32px] cursor-pointer text-slate-600"
              />
            )}
          </div>
          <p>Confirm password</p>
          <div className="flex items-center">
            <input
              required
              className="inputDefault w-full"
              type={`${showPassword ? "password" : "text"}`}
              placeholder="Your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-base font-normal">
              <input className="h-4 w-4" type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-base font-medium text-slate-800">
          <p>
            Already have a account? <span className="cursor-pointer text-sky-700">Login!</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 font-medium">
          <button className="rounded-lg bg-sky-700 px-16 py-3 text-xl text-white">Create account</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
