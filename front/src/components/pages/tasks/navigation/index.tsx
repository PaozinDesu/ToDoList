"use client";
import { INavigationModel } from "@/models/tasks/navigationModel";
import TaskListNavigationItem from "./column";

interface TaskListNavigationProps {
  options: INavigationModel["options"];
  navigationClick: INavigationModel["navigationClick"];
}
const TaskListNavigation: React.FC<TaskListNavigationProps> = ({ options, navigationClick }) => {
  return (
    <ul className="flex justify-center gap-7 px-12 py-4 text-slate-600">
      {options.map((option) => (
        <TaskListNavigationItem key={option.id} option={option} handleNavigationClick={navigationClick} />
      ))}
    </ul>
  );
};

export default TaskListNavigation;
