"use client";
import { useEffect, useState } from "react";
import { Plus, Circle, Pencil, Archive, Trash2, CircleCheckBig } from "lucide-react";
import { ReplaceDate } from "@/utils/replaceDate";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Make a hamburgue",
      description: "Task 1",
      priority: "High",
      status: {
        actual: "Pending",
        previous: "In Progress",
      },
      endDate: "2022/01/15",
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
      endDate: "2022/01/15",
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
      endDate: "2022/01/15",
    },
  ]);

  function priorityColor(priority: string) {
    if (priority == "High") {
      return (
        <td className="flex w-1/6 justify-center text-red-700">
          <h2 className="flex w-[110px] justify-center rounded-lg bg-red-100 px-3 py-1">{priority}</h2>
        </td>
      );
    } else if (priority == "Low") {
      return (
        <td className="flex w-1/6 justify-center text-sky-700">
          <h2 className="flex w-[110px] justify-center rounded-lg bg-sky-100 px-3 py-1">{priority}</h2>
        </td>
      );
    } else {
      return (
        <td className="flex w-1/6 justify-center text-amber-700">
          <h2 className="flex w-[110px] justify-center rounded-lg bg-amber-100 px-3 py-1">{priority}</h2>
        </td>
      );
    }
  }

  function statusColor(status: string) {
    if (status == "Pending") {
      return (
        <td className="flex w-1/6 justify-center text-red-700">
          <h2 className="flex w-[110px] justify-center rounded-lg bg-red-100 px-3 py-1">{status}</h2>
        </td>
      );
    } else if (status == "Done") {
      return (
        <td className="flex w-1/6 justify-center text-emerald-700">
          <h2 className="flex w-[110px] justify-center rounded-lg bg-emerald-100 px-3 py-1">{status}</h2>
        </td>
      );
    } else {
      return (
        <td className="flex w-1/6 justify-center text-amber-700">
          <h2 className="flex w-[110px] justify-center rounded-lg bg-amber-100 px-3 py-1">{status}</h2>
        </td>
      );
    }
  }

  function updateTaskStatus(id: number, status: string) {
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
  }

  return (
    <main className="mx-12 rounded-2xl bg-white px-5 drop-shadow-md">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="jus flex items-center border-b-2 p-5 text-2xl font-semibold text-slate-800">
            <th className="flex w-1/6 justify-start">Name</th>
            <th className="flex w-1/6 justify-center">Description</th>
            <th className="flex w-1/6 justify-center">Priority</th>
            {<th className="flex w-1/6 justify-center">Status</th>}
            <th className="flex w-1/6 justify-center">End date</th>
            <th className="flex w-1/6 justify-end">
              <button className="flex w-[140px] items-center justify-center gap-2 rounded-lg bg-sky-100 p-3 text-xl font-normal text-sky-700">
                <Plus /> New task
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="flex w-full items-center border-b-2 p-5 text-base font-medium text-slate-800">
              {task.status.actual === "Done" ? (
                <td className="flex w-1/6 flex-wrap justify-start line-through">{task.title}</td>
              ) : (
                <td className="flex w-1/6 flex-wrap justify-start">{task.title}</td>
              )}
              <td className="flex w-1/6 flex-wrap justify-center">{task.description}</td>
              {priorityColor(task.priority)}
              {statusColor(task.status.actual)}
              <td className="flex w-1/6 flex-wrap justify-center">{ReplaceDate(task.endDate)}</td>
              <td className="flex w-1/6 flex-wrap justify-end">
                <div className="flex w-[140px] justify-between text-slate-400">
                  {task.status.actual === "Done" ? (
                    <CircleCheckBig
                      onClick={() => updateTaskStatus(task.id, task.status.previous)}
                      className="duration-200 hover:text-sky-700"
                    />
                  ) : (
                    <Circle
                      onClick={() => updateTaskStatus(task.id, "Done")}
                      className="duration-200 hover:text-sky-700"
                    />
                  )}

                  <Pencil className="duration-200 hover:text-sky-700" />
                  <Archive className="duration-200 hover:text-sky-700" />
                  <Trash2 className="duration-200 hover:text-sky-700" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
