import { connection } from "./connection";

export class tasksModels  {
    getAll = async () => {
        const [tasks] = await connection.execute('SELECT * FROM tasks');
        return tasks;
    }

    getById = async () => {
        const tasks = await connection.execute('SELECT * FROM tasks WHERE id =');
    }
}

