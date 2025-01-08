import { Response, Request } from 'express';
import { tasksModels } from '../models/tasksModel';

export class tasksController  {

            getAll = async (req: Request, res: Response) => {
                const tasks = await new tasksModels().getAll()
                res.status(200).json(tasks);
            }   

            getById = async (req: Request, res: Response) => {
                const { id } = req.params;
                const task = await new tasksModels().getById(id)
                console.log(!task.constructor)
                console.log(task)
                if (!task) {
                    res.status(404).json({ message: 'Task not found' });
                }
                else {
                    res.status(200).json(task);
                }
            }   

            createdTask = async (req: Request, res: Response) => {
                
                const dateUTC = new Date(Date.now()).toLocaleDateString();
                const createdTask = await new tasksModels().createdTask(req.body, dateUTC)
                res.status(201).json(createdTask);
            }

            deleteAll = async (req: Request, res: Response) => {
                const tasks = await new tasksModels().deleteAll()
                res.status(204).json(tasks);
            }

            deleteById = async (req: Request, res: Response) => {
                const { id } = req.params;
                await new tasksModels().deleteById(id);
                res.status(204).json();
            }

            updateById = async (req: Request, res: Response) => {
                const { id } = req.params;
                await new tasksModels().updateById(req.body, id);
                res.status(204).json();
            }
            
    }
