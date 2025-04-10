"use client";
import { ITasksModel } from "@/models/tasks/tasksModel";
import { Plus } from "lucide-react";
import TaskListTableRow from "./row";

interface TaskListTableProps {
  tasks: ITasksModel["tasks"];
  handleOpenCreateModal: ITasksModel["openCreateModal"];
  openEditModal: ITasksModel["openEditModal"];
  openDeleteModal: ITasksModel["openDeleteModal"];
  updateTaskStatus: ITasksModel["updateTaskStatus"];
  getPriorityColor: ITasksModel["getPriorityColor"];
  getStatusColor: ITasksModel["getStatusColor"];
}

const TaskListTable: React.FC<TaskListTableProps> = ({
  tasks,
  handleOpenCreateModal,
  openEditModal,
  openDeleteModal,
  updateTaskStatus,
  getPriorityColor,
  getStatusColor,
}) => {
  return (
    <main className="mx-12 rounded-2xl bg-white px-5 drop-shadow-md">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="jus flex items-center p-5 text-2xl font-semibold text-slate-800">
            <th className="flex w-1/6 justify-start">Name</th>
            <th className="flex w-1/6 justify-center">Description</th>
            <th className="flex w-1/6 justify-center">Priority</th>
            <th className="flex w-1/6 justify-center">Status</th>
            <th className="flex w-1/6 justify-center">End date</th>
            <th className="flex w-1/6 justify-end">
              <button
                onClick={() => handleOpenCreateModal()}
                className="flex w-[140px] items-center justify-center gap-2 rounded-lg bg-sky-100 p-3 text-xl font-normal text-sky-700"
              >
                <Plus /> New task
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskListTableRow
              key={task.id}
              task={task}
              handleOpenEditModal={openEditModal}
              handleOpenDeleteModal={openDeleteModal}
              handleUpdateTaskStatus={updateTaskStatus}
              getPriorityColor={getPriorityColor}
              getStatusColor={getStatusColor}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default TaskListTable;
