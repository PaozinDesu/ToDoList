import { Response, Request } from 'express';
import { tasksModels } from '../models/tasksModel';

export class GetAllTasksController  {
            getAll = async (req: Request, res: Response) => {
                const tasks = await new tasksModels().getAll()
                res.status(200).json(tasks);
        }

            createdTask = async (req: Request, res: Response) => {
                
                const dateUTC = new Date(Date.now()).toUTCString();
                const createdTask = await new tasksModels().createdTask(req.body, dateUTC)
                res.status(201).json(createdTask);
            }
    }
