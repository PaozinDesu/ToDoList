'use client'
 
import { usePathname } from 'next/navigation'

import Link from "next/link";

import { getToday } from "@/utils/getToday";
import { LogIn, Sun } from "lucide-react";

const MainHeader: React.FC = () => {
  const today = getToday();
  const pathname = usePathname()
  
  return (
    <header className="flex justify-between px-12 py-6">
      <Link href="/">
      <div className="cursor-pointer">
        <h2 className="text-4xl font-semibold text-slate-800">Tasks List</h2>
        <h4 className="text-sm font-medium text-slate-500">{today}</h4>
      </div>
      </Link>
      <div className="flex items-center gap-8">
        <div className="cursor-pointer rounded-full bg-sky-100 p-2">
          <Sun size={24} className="text-sky-700" />
        </div>
        <Link href="/" className={`${pathname === '/' ? 'hidden' : ''}`}>
        <div className="rounded-full cursor-pointer bg-sky-100 p-2">
          <LogIn size={24} className="text-sky-700" />
        </div>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
