"use client";
import { useEffect, useState } from "react";
import { Plus, Circle, Pencil, Archive, Trash2 } from "lucide-react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      title: "Today's tasks",
      description: "Task 1",
      priority: "High",
      status: "Pending",
      endDate: "2022-01-15",
    },
    {
      title: "Today's tasks",
      description: "Task 1",
      priority: "Low",
      status: "Done",
      endDate: "2022-01-15",
    },
    {
      title: "Today's tasks",
      description: "Task 1",
      priority: "Medium",
      status: "In progress",
      endDate: "2022-01-15",
    },
  ]);

  function priorityColor(priority: string) {
    if (priority == "High") {
      return (
        <td className="w-1/6 flex justify-center text-red-700">
          <h2 className="bg-red-100 w-[110px] px-3 py-1 rounded-lg flex justify-center">{priority}</h2>
        </td>
      );
    } else if (priority == "Low") {
      return (
        <td className="w-1/6 flex justify-center text-sky-700">
          <h2 className="bg-sky-100 w-[110px] px-3 py-1 rounded-lg flex justify-center">{priority}</h2>
        </td>
      );
    } else {
      return (
        <td className="w-1/6 flex justify-center text-amber-700">
          <h2 className="bg-amber-100 w-[110px] px-3 py-1 rounded-lg flex justify-center">{priority}</h2>
        </td>
      );
    }
  }

  function statusColor(status: string) {
    if (status == "Pending") {
      return (
        <td className="w-1/6 flex justify-center text-red-700">
          <h2 className="bg-red-100 w-[110px] px-3 py-1 rounded-lg flex justify-center">{status}</h2>
        </td>
      );
    } else if (status == "Done") {
      return (
        <td className="w-1/6 flex justify-center text-emerald-700">
          <h2 className="bg-emerald-100 w-[110px] px-3 py-1 rounded-lg flex justify-center">{status}</h2>
        </td>
      );
    } else {
      return (
        <td className="w-1/6 flex justify-center text-amber-700">
          <h2 className="bg-amber-100 w-[110px] px-3 py-1 rounded-lg flex justify-center">{status}</h2>
        </td>
      );
    }
  }
  return (
    <main className="drop-shadow-md mx-12 rounded-2xl bg-white px-5">
      <table className="w-full table-fixed border-collapse">
        <tr className="text-slate-800 font-semibold text-2xl flex items-center jus p-5 border-b-2">
          <th className="w-1/6 flex justify-start">Name</th>
          <th className="w-1/6 flex justify-center">Description</th>
          <th className="w-1/6 flex justify-center">Priority</th>
          {<th className="w-1/6 flex justify-center">Status</th>}
          <th className="w-1/6 flex justify-center">End date</th>
          <th className="w-1/6 flex justify-end">
            <button className="flex w-[140px] justify-center items-center text-sky-700 gap-2 p-3 bg-sky-100 rounded-lg text-xl font-normal">
              <Plus /> New task
            </button>
          </th>
        </tr>
        {tasks.map((task) => (
          <tr className="text-slate-800 font-medium text-base flex items-center p-5 border-b-2 w-full">
            <td className="w-1/6 flex flex-wrap justify-start">{task.title}</td>
            <td className="w-1/6 flex flex-wrap justify-center">{task.description}</td>
            {priorityColor(task.priority)}
            {statusColor(task.status)}
            <td className="w-1/6 flex flex-wrap justify-center">{task.endDate}</td>
            <td className="w-1/6 flex flex-wrap justify-end">
              <div className="flex w-[140px] justify-between text-slate-400">
                <Circle />
                <Pencil />
                <Archive />
                <Trash2 />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
}
