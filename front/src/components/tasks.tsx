"use client";
import { useState } from "react";
import { Plus, Circle, Pencil, Archive, Trash2, CircleCheckBig } from "lucide-react";
import { ITask } from "@/interface/task.interface";
import EditTask from "./modals/editTask";
import CreateTask from "./modals/createTask";
import DeleteTask from "./modals/deleteTask";
import TaskModel from "../models/taskModels";

export default function Tasks({
  handleCloseEditModal,
  getAllTasks,
  handleOpenCreateModal,
  handleCloseCreateModal,
  handleCloseDeleteModal,
  handleDeleteTask,
  selectedTask,
  editModalIsOpen,
  createModalIsOpen,
  deleteModalIsOpen,
}: ReturnType<typeof TaskModel>) {
  // const [tasks, setTasks] = useState<ITask[]>([
  //   {
  //     id: 1,
  //     title: "Make a hamburgue",
  //     description: "Task 1",
  //     priority: "High",
  //     status: {
  //       actual: "Pending",
  //       previous: "In Progress",
  //     },
  //     startDate: "15/10/2024",
  //     endDate: "15/10/2024",
  //   },
  //   {
  //     id: 2,
  //     title: "Walk with the dog",
  //     description: "Task 1",
  //     priority: "Low",
  //     status: {
  //       actual: "Done",
  //       previous: "In Progress",
  //     },
  //     startDate: "15/10/2024",
  //     endDate: "15/10/2024",
  //   },
  //   {
  //     id: 3,
  //     title: "Today's tasks",
  //     description: "Task 1",
  //     priority: "Medium",
  //     status: {
  //       actual: "In Progress",
  //       previous: "In Progress",
  //     },
  //     startDate: "15/10/2024",
  //     endDate: "15/10/2024",
  //   },
  // ]);

  // const [selectedTask, setSelectedTask] = useState<ITask | null>(null);
  // const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  // function handleOpenEditModal(task: ITask) {
  //   setSelectedTask(task);
  //   setEditModalIsOpen(true);
  // }

  // function handleCloseEditModal() {
  //   setSelectedTask(null);
  //   setEditModalIsOpen(false);
  // }

  // const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  // function handleCloseCreateModal() {
  //   setCreateModalIsOpen(false);
  // }

  // function handleOpenCreateModal() {
  //   setCreateModalIsOpen(true);
  // }

  // const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  // function handleCloseDeleteModal() {
  //   setSelectedTask(null);
  //   setDeleteModalIsOpen(false);
  // }

  // function handleOpenDeleteModal(task: ITask) {
  //   setSelectedTask(task);
  //   setDeleteModalIsOpen(true);
  // }

  // function handleDeleteTask(id: number) {
  //   const index = tasks.indexOf(tasks.find((task) => task.id === id)!);
  //   tasks.splice(index, 1);
  //   setDeleteModalIsOpen(false);
  //   setSelectedTask(null);
  // }

  // function getPriorityColor(priority: ITask["priority"]) {
  //   const priorityColors: Record<ITask["priority"], string> = {
  //     High: "text-red-700 bg-red-100",
  //     Medium: "text-amber-700 bg-amber-100",
  //     Low: "text-sky-700 bg-sky-100",
  //   };

  //   return priorityColors[priority];
  // }

  // function getStatusColor(status: ITask["status"]["actual"]) {
  //   const statusColors: Record<ITask["status"]["actual"], string> = {
  //     Pending: "text-red-700 bg-red-100",
  //     "In Progress": "text-amber-700 bg-amber-100",
  //     Done: "text-emerald-700 bg-emerald-100",
  //   };

  //   return statusColors[status];
  // }

  // function handleUpdateTaskStatus(id: number, status: ITask["status"]["previous"]) {
  //   const newTasks = tasks.map((task) => {
  //     if (task.id === id) {
  //       return {
  //         ...task,
  //         status: {
  //           previous: task.status.actual,
  //           actual: status,
  //         },
  //       };
  //     }
  //     return task;
  //   });
  //   setTasks(newTasks);
  // }

  return (
    <>
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
          <tbody>{getAllTasks()}</tbody>
        </table>
      </main>
      {editModalIsOpen && <EditTask task={selectedTask!} closeEditModal={handleCloseEditModal} />}
      {createModalIsOpen && <CreateTask closeCreateModal={handleCloseCreateModal} />}
      {deleteModalIsOpen && (
        <DeleteTask task={selectedTask!} closeDeleteModal={handleCloseDeleteModal} deleteTask={handleDeleteTask} />
      )}
    </>
  );
}
