import { Response, Request } from 'express';

export class GetAllTasksController  {
        getAll = (req: Request, res: Response) => {
            res.status(200).json({message:'Success'});
        }
    }
