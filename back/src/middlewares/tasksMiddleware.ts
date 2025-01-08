import { Request, Response, NextFunction} from 'express';
import { tasksModels } from '../models/tasksModel';
import { connection } from '../models/connection';

export class MiddlewareValidade {
    validadeTaskBody = (req: Request, res: Response, next: NextFunction ) => {
        const {body} = req; 
        if (body.title === undefined || body.status === undefined || body.description === undefined) {
           res.status(400).json({message: "Preencha todos os campos!"});
        }
        else if (body.title === '' || body.status === '' || body.description === '') {
            res.status(400).json({message: "Preencha todos os campos!"});
         }
        else {
            next();
        }
    }

    // validadeExistTask = async (req: Request, res: Response, next: NextFunction ) => {
    //     if (!task) {
    //         return res.status(404).json({ message: 'Task not found' });
    //     }
    //     else {
    //         res.status(200).json(task);
    //     }


    // }
}
