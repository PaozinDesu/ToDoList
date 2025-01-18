import { Request, Response, NextFunction} from 'express';

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
}
