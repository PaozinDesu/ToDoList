import { connection } from "./connection";

export class tasksModels  {
    getALL = async () => {
        return await connection.execute('SELECT * FROM tasks');
    }

    getById = async () => {
        const tasks = await connection.execute('SELECT * FROM tasks');
    }
}

