"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="flex w-full select-none items-center justify-center">
      <form className="flex min-w-[600px] flex-col gap-8 rounded-3xl bg-white p-9">
        <h1 className="text-3xl font-semibold text-slate-800">Login</h1>

        <div className="containerInputDefault">
          <p>User name</p>
          <input required className="inputDefault" type="text" placeholder="Ex: Pedro Silva Santos" />
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
              <Eye
                onClick={() => setShowPassword(false)}
                size={24}
                className="ml-[-32px] cursor-pointer text-slate-600"
              />
            ) : (
              <EyeClosed
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
              <input className="h-4 w-4" type="checkbox" />
              <p className="">Remember me</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-base font-medium text-slate-800">
          <p>
            Already have a account? <span className="cursor-pointer text-sky-700">Login!</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 font-medium">
          <button className="rounded-lg bg-sky-700 px-16 py-3 text-xl text-white">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
