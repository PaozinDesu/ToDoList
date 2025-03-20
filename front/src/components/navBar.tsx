"use client";
import { useEffect, useState } from "react";
import { Archive, ArrowDown, CircleAlert, ClipboardCheck, ClipboardList, List } from "lucide-react";

export default function NavBar() {
  const [options, setOptions] = useState([
    {
      id: 1,
      icon: <List size={24} />,
      text: "Today's tasks",
      isFocused: true,
    },
    {
      id: 2,
      icon: <List size={24} />,
      text: "All tasks",
      isFocused: false,
    },
    {
      id: 3,
      icon: <Archive size={24} />,
      text: "Archived tasks",
      isFocused: false,
    },
    {
      id: 4,
      icon: <CircleAlert size={24} />,
      text: "Pendent tasks",
      isFocused: false,
    },
    {
      id: 5,
      icon: <ClipboardList size={24} />,
      text: "Open tasks",
      isFocused: false,
    },
    {
      id: 6,
      icon: <ClipboardCheck size={24} />,
      text: "Ended tasks",
      isFocused: false,
    },
    {
      id: 7,
      icon: <ArrowDown size={24} />,
      text: "Order by",
      subtitle: "Priority",
      isFocused: false,
    },
  ]);

  function handleClick(id: number) {
    const newOptions = options.map((option) => ({
      ...option,
      isFocused: option.id === id,
    }));
    if (id === 7) {
      return;
    } else {
      setOptions(newOptions);
    }
  }

  return (
    <ul className="flex justify-center gap-7 px-12 py-4 text-slate-600">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleClick(option.id)}
          className={option.isFocused ? "isFocused" : "isNotFocused"}
        >
          {option.icon}
          <div className="flex flex-col items-start duration-300">
            <span className="">{option.text}</span>
            {option.subtitle && (
              <select className="bg-transparent text-xs outline-none">
                <option>End date</option>
                <option>Status</option>
                <option>Priority</option>
              </select>
            )}
          </div>
        </button>
      ))}
    </ul>
  );
}
