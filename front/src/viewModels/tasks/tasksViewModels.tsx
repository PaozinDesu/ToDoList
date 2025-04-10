"use client";

import { ITask } from "@/interface/task.interface";
import { useState } from "react";
import { ITasksModel } from "@/models/tasks/tasksModel";

export default function useTasksViewModel(): ITasksModel {
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

  const openEditModal = (task: ITask) => {
    setSelectedTask(task);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setSelectedTask(null);
    setEditModalIsOpen(false);
  };

  const closeCreateModal = () => {
    setCreateModalIsOpen(false);
  };

  const openCreateModal = () => {
    setCreateModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedTask(null);
    setDeleteModalIsOpen(false);
  };

  const openDeleteModal = (task: ITask) => {
    setSelectedTask(task);
    setDeleteModalIsOpen(true);
  };

  const deleteTask = (id: number) => {
    const index = tasks.indexOf(tasks.find((task) => task.id === id)!);
    tasks.splice(index, 1);
    setDeleteModalIsOpen(false);
    setSelectedTask(null);
  };

  const getPriorityColor = (priority: ITask["priority"]) => {
    const priorityColors: Record<ITask["priority"], string> = {
      High: "priority-high",
      Medium: "priority-medium",
      Low: "priority-low",
    };

    return priorityColors[priority];
  };

  const getStatusColor = (status: ITask["status"]["actual"]) => {
    const statusColors: Record<ITask["status"]["actual"], string> = {
      Pending: "status-pending",
      "In Progress": "status-in-progress",
      Done: "status-done",
    };

    return statusColors[status];
  };

  const updateTaskStatus = (id: number, status: ITask["status"]["previous"]) => {
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
    tasks,
    selectedTask,
    editModalIsOpen,
    createModalIsOpen,
    deleteModalIsOpen,
    openEditModal,
    closeEditModal,
    openCreateModal,
    closeCreateModal,
    openDeleteModal,
    closeDeleteModal,
    deleteTask,
    getPriorityColor,
    getStatusColor,
    updateTaskStatus,
  };
}
