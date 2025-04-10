"use client";

import { IOption } from "@/interface/navigation.option.interface";
import { INavigationModel } from "@/models/tasks/navigationModel";
import { Archive, ArrowDown, CircleAlert, ClipboardCheck, ClipboardList, List } from "lucide-react";
import { useState } from "react";

export default function useNavigationViewModel(): INavigationModel {
  const [options, setOptions] = useState<IOption[]>([
    {
      id: 1,
      icon: <List size={24} />,
      text: "Today's tasks",
      subtitle: null,
      isFocused: true,
      isClickable: true,
    },
    {
      id: 2,
      icon: <List size={24} />,
      text: "All tasks",
      subtitle: null,
      isFocused: false,
      isClickable: true,
    },
    {
      id: 3,
      icon: <Archive size={24} />,
      text: "Archived tasks",
      subtitle: null,
      isFocused: false,
      isClickable: true,
    },
    {
      id: 4,
      icon: <CircleAlert size={24} />,
      text: "Pendent tasks",
      subtitle: null,
      isFocused: false,
      isClickable: true,
    },
    {
      id: 5,
      icon: <ClipboardList size={24} />,
      text: "Open tasks",
      subtitle: null,
      isFocused: false,
      isClickable: true,
    },
    {
      id: 6,
      icon: <ClipboardCheck size={24} />,
      text: "Ended tasks",
      subtitle: null,
      isFocused: false,
      isClickable: true,
    },
    {
      id: 7,
      icon: <ArrowDown size={24} />,
      text: "Order by",
      subtitle: "Priority",
      isFocused: false,
      isClickable: false,
    },
  ]);

  function navigationClick(id: number) {
    if (!options[id - 1].isClickable) return;

    const newOptions = options.map((option) => ({
      ...option,
      isFocused: option.id === id,
    }));

    setOptions(newOptions);
  }

  return {
    options,
    navigationClick,
  };
}
