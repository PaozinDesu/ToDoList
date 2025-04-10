import { ITask } from "@/interface/task.interface";

export interface ITasksModel {
  tasks: ITask[];
  selectedTask: ITask | null;
  editModalIsOpen: boolean;
  createModalIsOpen: boolean;
  deleteModalIsOpen: boolean;
  openEditModal: (task: ITask) => void;
  closeEditModal: () => void;
  openCreateModal: () => void;
  closeCreateModal: () => void;
  openDeleteModal: (task: ITask) => void;
  closeDeleteModal: () => void;
  deleteTask: (id: number) => void;
  getPriorityColor: (priority: ITask["priority"]) => string;
  getStatusColor: (status: ITask["status"]["actual"]) => string;
  updateTaskStatus: (id: number, status: ITask["status"]["previous"]) => void;
}
