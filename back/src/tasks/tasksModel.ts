import { connection } from "../models/connection";
import { ITask } from "./taskInterface";
export class TasksModels {
  getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
  };

  getById = async (id: string) => {
    const [task] = await connection.execute("SELECT * FROM tasks WHERE id = ?", [id]);
    return task as ITask[];
  };

  createdTask = async (task: ITask, createdAt: string) => {
    const [createdTask] = await connection.execute(
      "INSERT INTO tasks(title, status, created_at, description) VALUES (?, ?, ?, ?)",
      [task.title, task.status, createdAt, task.description]
    );

    return createdTask;
  };

  deleteAll = async () => {
    const [deleteTasks] = await connection.execute("DELETE FROM tasks");

    return deleteTasks;
  };

  deleteById = async (id: string) => {
    const [deleteTask] = await connection.execute("DELETE FROM tasks WHERE id = ?", [id]);

    return deleteTask;
  };

  updateById = async (task: ITask, id: string) => {
    const [updateTasks] = await connection.execute(
      "UPDATE tasks SET title = ?, status = ?, description = ? WHERE id = ?",
      [task.title, task.status, task.description, id]
    );

    return updateTasks;
  };
}
