import { IOption } from "@/interface/navigation.option.interface";
import { INavigationModel } from "@/models/tasks/navigationModel";

interface TaskListNavigationItemProps {
  option: IOption;
  handleNavigationClick: INavigationModel["navigationClick"];
}
const TaskListNavigationItem: React.FC<TaskListNavigationItemProps> = ({ option, handleNavigationClick }) => {
  return (
    <button
      onClick={() => handleNavigationClick(option.id)}
      className={option.isFocused ? "isFocused" : "isNotFocused"}
    >
      {option.icon}
      <div className="flex flex-col items-start duration-300">
        <label className="cursor-pointer" htmlFor={option.text}>
          {option.text}
        </label>
        {option.subtitle && (
          <select className="bg-transparent text-xs outline-none" id={option.text}>
            <option>End date</option>
            <option>Status</option>
            <option>Priority</option>
          </select>
        )}
      </div>
    </button>
  );
};

export default TaskListNavigationItem;
