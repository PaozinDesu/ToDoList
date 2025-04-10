import { ITask } from "@/interface/task.interface";
import { ITasksModel } from "@/models/tasks/tasksModel";

interface DeleteTaskProps {
  task: ITask;
  handleCloseDeleteModal: ITasksModel["closeDeleteModal"];
  handleDeleteTask: ITasksModel["deleteTask"];
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ task, handleCloseDeleteModal, handleDeleteTask }) => {
  return (
    <div className="absolute bottom-0 right-0 flex max-h-screen min-h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.25)]">
      <form className="flex max-w-[540px] flex-col gap-8 rounded-3xl bg-white p-9">
        <h1 className="text-3xl font-semibold text-slate-800">Delete Task</h1>
        <h4 className="text-2xl font-normal text-slate-500">
          Are you sure you want to delete this task? This action is irreversible.
        </h4>
        <div className="flex justify-end gap-4 font-medium">
          <input
            onClick={() => handleCloseDeleteModal()}
            type="button"
            className="cursor-pointer rounded-lg bg-slate-200 px-5 py-3 text-lg text-sky-700 duration-300 ease-out"
            value="Cancel"
          />
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="rounded-lg bg-sky-700 px-5 py-3 text-lg text-white"
          >
            Delete task
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTask;
