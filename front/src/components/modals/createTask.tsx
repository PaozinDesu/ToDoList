import { replaceDate } from "@/utils/replaceDate";
import { ChevronDownIcon } from "lucide-react";
import { ITask } from "../../interface/task.interface";

interface CreateTaskProps {
  closeCreateModal: () => void;
}

export default function CreateTask({ closeCreateModal }: CreateTaskProps) {
  return (
    <div className="absolute bottom-0 right-0 flex max-h-screen min-h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.25)]">
      <form className="flex min-w-[700px] flex-col gap-8 rounded-3xl bg-white p-9">
        <h1 className="text-3xl font-semibold text-slate-800">Create Task</h1>
        <div className="containerInputDefault">
          <p>Name</p>
          <input required className="inputDefault" type="text" placeholder="Task name" />
        </div>
        <div className="flex justify-between gap-8">
          <div className="containerInputDefault">
            <p>Priority</p>
            <div className="font=normal relative flex w-full items-center justify-between rounded-xl border border-slate-300 text-slate-900 outline-none placeholder:text-slate-500">
              <select
                id="currency"
                name="currency"
                aria-label="Currency"
                className="appearance-none bg-transparent py-2 pl-3 pr-9 text-slate-500 outline-none"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 text-gray-500 sm:size-4" />
            </div>
          </div>
          <div className="containerInputDefault w-full">
            <p>Start date</p>
            <input
              name="startDate"
              type="date"
              className="inputDefault"
              min={replaceDate(new Date(Date.now() - 31557600000).toLocaleDateString())}
              max={replaceDate(new Date(Date.now() + 31557600000).toLocaleDateString())}
              required
              defaultValue={replaceDate(new Date(Date.now()).toLocaleDateString())}
            />
          </div>
          <div className="containerInputDefault w-full">
            <p>End date</p>
            <input
              className="inputDefault"
              type="date"
              name="endDate"
              min={replaceDate(new Date(Date.now() - 31557600000).toLocaleDateString())}
              max={replaceDate(new Date(Date.now() + 31557600000).toLocaleDateString())}
              required
              defaultValue={replaceDate(new Date(Date.now() + 86459178).toLocaleDateString())}
            />
          </div>
        </div>
        <div className="containerInputDefault">
          <p>Description</p>
          <input required className="inputDefault" type="text" placeholder="Do after the lunch" />
        </div>
        <div className="flex justify-end gap-4 font-medium">
          <input
            onClick={() => closeCreateModal()}
            type="button"
            className="cursor-pointer rounded-lg bg-slate-200 px-5 py-3 text-lg text-sky-700 duration-300 ease-out"
            value="Cancel"
          />
          <button className="rounded-lg bg-sky-700 px-5 py-3 text-lg text-white">Create task</button>
        </div>
      </form>
    </div>
  );
}
