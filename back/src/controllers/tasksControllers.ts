import { Response, Request } from 'express';
import { tasksModels } from '../models/tasksModel';

export class GetAllTasksController  {
            getAll = (req: Request, res: Response) => {
                const tasks = new tasksModels().getAll
            res.status(200).json({tasks});
        }
    }
