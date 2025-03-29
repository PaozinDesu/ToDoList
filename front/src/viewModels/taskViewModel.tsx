"use client";
import TaskModel from "../models/taskModels";
import Tasks from "../components/tasks";

export default function TaskViewModel() {
  const taskModel = TaskModel();

  return <Tasks {...taskModel} />;
}
