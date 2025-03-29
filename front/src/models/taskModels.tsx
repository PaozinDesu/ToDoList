"use client";
import { ITask } from "@/interface/task.interface";
import { Archive, Circle, CircleCheckBig, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function TaskModel() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: "Make a hamburgue",
      description: "Task 1",
      priority: "High",
      status: {
        actual: "Pending",
        previous: "In Progress",
      },
      startDate: "15/10/2024",
      endDate: "15/10/2024",
    },
    {
      id: 2,
      title: "Walk with the dog",
      description: "Task 1",
      priority: "Low",
      status: {
        actual: "Done",
        previous: "In Progress",
      },
      startDate: "15/10/2024",
      endDate: "15/10/2024",
    },
    {
      id: 3,
      title: "Today's tasks",
      description: "Task 1",
      priority: "Medium",
      status: {
        actual: "In Progress",
        previous: "In Progress",
      },
      startDate: "15/10/2024",
      endDate: "15/10/2024",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const getAllTasks = () => {
    return tasks.map((task) => (
      <tr key={task.id} className="flex w-full items-center border-t-2 p-5 text-base font-medium text-slate-800">
        {task.status.actual === "Done" ? (
          <td className="flex w-1/6 flex-wrap justify-start line-through">{task.title}</td>
        ) : (
          <td className="flex w-1/6 flex-wrap justify-start">{task.title}</td>
        )}
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
    ));
  };

  const handleOpenEditModal = (task: ITask) => {
    setSelectedTask(task);
    setEditModalIsOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedTask(null);
    setEditModalIsOpen(false);
  };

  const handleCloseCreateModal = () => {
    setCreateModalIsOpen(false);
  };

  const handleOpenCreateModal = () => {
    setCreateModalIsOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedTask(null);
    setDeleteModalIsOpen(false);
  };

  const handleOpenDeleteModal = (task: ITask) => {
    setSelectedTask(task);
    setDeleteModalIsOpen(true);
  };

  const handleDeleteTask = (id: number) => {
    const index = tasks.indexOf(tasks.find((task) => task.id === id)!);
    tasks.splice(index, 1);
    setDeleteModalIsOpen(false);
    setSelectedTask(null);
  };

  const getPriorityColor = (priority: ITask["priority"]) => {
    const priorityColors: Record<ITask["priority"], string> = {
      High: "text-red-700 bg-red-100",
      Medium: "text-amber-700 bg-amber-100",
      Low: "text-sky-700 bg-sky-100",
    };

    return priorityColors[priority];
  };

  const getStatusColor = (status: ITask["status"]["actual"]) => {
    const statusColors: Record<ITask["status"]["actual"], string> = {
      Pending: "text-red-700 bg-red-100",
      "In Progress": "text-amber-700 bg-amber-100",
      Done: "text-emerald-700 bg-emerald-100",
    };

    return statusColors[status];
  };

  const handleUpdateTaskStatus = (id: number, status: ITask["status"]["previous"]) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: {
            previous: task.status.actual,
            actual: status,
          },
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return {
    handleOpenEditModal,
    handleCloseEditModal,
    getAllTasks,
    handleOpenCreateModal,
    handleCloseCreateModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteTask,
    getPriorityColor,
    getStatusColor,
    handleUpdateTaskStatus,
    selectedTask,
    editModalIsOpen,
    createModalIsOpen,
    deleteModalIsOpen,
  };
}
