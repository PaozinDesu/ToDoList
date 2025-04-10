"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const inputDefault: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="flex items-center">
      <input
        required
        className="inputDefault w-full"
        type={`${showPassword ? "password" : "text"}`}
        placeholder="Your password"
      />
      ;
      {showPassword ? (
        <Eye onClick={() => setShowPassword(false)} size={24} className="ml-[-32px] cursor-pointer text-slate-600" />
      ) : (
        <EyeClosed
          onClick={() => setShowPassword(true)}
          size={24}
          className="ml-[-32px] cursor-pointer text-slate-600"
        />
      )}
    </div>
  );
};

export default inputDefault;
