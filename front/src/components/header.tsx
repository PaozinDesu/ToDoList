import { Sun, LogIn } from "lucide-react";

export default function MainHeader() {
  return (
    <header className="flex justify-between py-6 px-12">
      <div>
        <h2 className="text-3xl font-semibold text-slate-800">Tasks List</h2>
        <h4 className="text-sm font-medium text-slate-500">Wednesday, 11 May</h4>
      </div>

      <div className="flex items-center gap-8">
        <div className="bg-sky-100 rounded-full p-2">
          <Sun size={32} className="text-sky-700" />
        </div>
        <div className="bg-sky-100 rounded-full p-2">
          <LogIn size={32} className="text-sky-700" />
        </div>
      </div>
    </header>
  );
}
