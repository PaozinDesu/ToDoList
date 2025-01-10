import { Response, Request } from 'express';
import { TasksModels } from '../models/tasksModel';
import date from '../shared/utils/date';

export class TasksController  {
    tasksModels: TasksModels
constructor() {
    this.tasksModels = new TasksModels();
}
            getAll = async (req: Request, res: Response) => {
                const tasks = await this.tasksModels.getAll()
                res.status(200).json(tasks);
            }   

            getById = async (req: Request, res: Response) => {
                const { id } = req.params;
                const task = await this.tasksModels.getById(id)
                console.log(task.length)
                console.log(!task)
                if (!task.length) {
                    res.status(404).json({ message: 'Task not found' });
                }
                else {
                    res.status(200).json(task);
                }
            }   

            createdTask = async (req: Request, res: Response) => {
                const createdTask = await this.tasksModels.createdTask(req.body, date.getCurrentDate())
                res.status(201).json(createdTask);
            }

            deleteAll = async (req: Request, res: Response) => {
                const tasks = await this.tasksModels.deleteAll()
                res.status(204).json(tasks);
            }

            deleteById = async (req: Request, res: Response) => {
                const { id } = req.params;
                await this.tasksModels.deleteById(id);
                res.status(204).json();
            }

            updateById = async (req: Request, res: Response) => {
                const { id } = req.params;
                await this.tasksModels.updateById(req.body, id);
                res.status(204).json();
            }
            
    }
