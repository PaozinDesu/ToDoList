import { ITask } from "@/interface/task.interface";
import { ITasksModel } from "@/models/tasksModel";
import { Archive, Circle, CircleCheckBig, Pencil, Trash2 } from "lucide-react";

interface TaskListTableRowProps {
  task: ITask;
  handleOpenEditModal: ITasksModel["openEditModal"];
  handleOpenDeleteModal: ITasksModel["openDeleteModal"];
  handleUpdateTaskStatus: ITasksModel["updateTaskStatus"];
  getPriorityColor: ITasksModel["getPriorityColor"];
  getStatusColor: ITasksModel["getStatusColor"];
}

const TaskListTableRow: React.FC<TaskListTableRowProps> = ({
  task,
  handleOpenDeleteModal,
  handleOpenEditModal,
  handleUpdateTaskStatus,
  getPriorityColor,
  getStatusColor,
}) => {
  return (
    <tr className="flex w-full items-center border-t-2 p-5 text-base font-medium text-slate-800">
      <td className={`flex w-1/6 flex-wrap justify-start ${task.status.actual === "Done" ? "line-through" : ""}`}>
        {task.title}
      </td>
      <td className="flex w-1/6 flex-wrap justify-center">{task.description}</td>
      <td className="flex w-1/6 justify-center">
        <h2 className={`flex w-[110px] justify-center rounded-lg px-3 py-1 ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </h2>
      </td>
      <td className="flex w-1/6 justify-center">
        <h2 className={`flex w-[110px] justify-center rounded-lg px-3 py-1 ${getStatusColor(task.status.actual)}`}>
          {task.status.actual}
        </h2>
      </td>
      <td className="flex w-1/6 flex-wrap justify-center">{task.endDate}</td>
      <td className="flex w-1/6 flex-wrap justify-end">
        <div className="flex w-[140px] justify-between text-slate-400">
          {task.status.actual === "Done" ? (
            <CircleCheckBig
              onClick={() => handleUpdateTaskStatus(task.id, task.status.previous)}
              className="duration-200 hover:text-sky-700"
            />
          ) : (
            <Circle
              onClick={() => handleUpdateTaskStatus(task.id, "Done")}
              className="duration-200 hover:text-sky-700"
            />
          )}

          <Pencil className="duration-200 hover:text-sky-700" onClick={() => handleOpenEditModal(task)} />
          <Archive className="duration-200 hover:text-sky-700" />
          <Trash2 className="duration-200 hover:text-sky-700" onClick={() => handleOpenDeleteModal(task)} />
        </div>
      </td>
    </tr>
  );
};

export default TaskListTableRow;
