import { Archive, ArrowDown, CircleAlert, ClipboardCheck, ClipboardList, List, LucideIcon } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function NavBar() {
  const options = [
    {
      icon: <List size={24} className="text-slate-600" />,
      text: "Today's tasks",
    },
    {
      icon: <List size={24} className="text-slate-600" />,
      text: "All tasks",
    },
    {
      icon: <Archive size={24} className="text-slate-600" />,
      text: "Archived tasks",
    },
    {
      icon: <CircleAlert size={24} className="text-slate-600" />,
      text: "Pendent tasks",
    },
    {
      icon: <ClipboardList size={24} className="text-slate-600" />,
      text: "Open tasks",
    },
    {
      icon: <ClipboardCheck size={24} className="text-slate-600" />,
      text: "Ended tasks",
    },
    {
      icon: <ArrowDown size={24} className="text-slate-600" />,
      text: "Order by",
    },
  ];

  return (
    <ul className="flex justify-center gap-7 py-4 px-12">
      {options.map((option, index) => (
        <li key={index} className="flex items-center justify-center gap-2">
          {option.icon}
          <span className="text-slate-500">{option.text}</span>
        </li>
      ))}
    </ul>
  );
}
