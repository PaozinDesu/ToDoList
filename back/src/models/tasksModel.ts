import { connection } from "./connection";
import { Itask } from  "../interface/taskInterface";
export class tasksModels  {
    getAll = async () => {
        const [tasks] = await connection.execute('SELECT * FROM tasks');
        return tasks;
    }

    createdTask = async (task: Itask, createdAt: string) => {



        const [createdTask] = await connection.execute('INSERT INTO tasks(title, status, created_at, description) VALUES (?, ?, ?, ?)', [task.title, task.title, createdAt, task.description]);

        return createdTask;
    }

    getById = async () => {
        const tasks = await connection.execute('SELECT * FROM tasks WHERE id =');
    }
}

