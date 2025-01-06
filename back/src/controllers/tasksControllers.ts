import { Response, Request } from 'express';
import { tasksModels } from '../models/tasksModel';

export class GetAllTasksController  {
            getAll = async (req: Request, res: Response) => {
                const tasks = await new tasksModels().getAll()
                res.status(200).json(tasks);
        }
    }
