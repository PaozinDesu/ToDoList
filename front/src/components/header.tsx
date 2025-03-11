import { Sun, LogIn } from "lucide-react";

export default function MainHeader() {
  const today = new Date(Date.now()).toDateString().replace(" ", ", ");
  return (
    <header className="flex justify-between px-12 py-6">
      <div>
        <h2 className="text-4xl font-semibold text-slate-800">Tasks List</h2>
        <h4 className="text-sm font-medium text-slate-500">{today}</h4>
      </div>

      <div className="flex items-center gap-8">
        <div className="rounded-full bg-sky-100 p-2">
          <Sun size={32} className="text-sky-700" />
        </div>
        <div className="rounded-full bg-sky-100 p-2">
          <LogIn size={32} className="text-sky-700" />
        </div>
      </div>
    </header>
  );
}
