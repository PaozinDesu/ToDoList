import { Router } from "express";
import { TasksController } from "../controllers/tasksControllers";
import { MiddlewareValidade } from '../middlewares/tasksMiddleware';

export const router = Router();

const tasksController = new TasksController();
const middlewareValidade = new MiddlewareValidade();

router.get("/tasks", tasksController.getAll);
router.get("/tasks/:id", tasksController.getById);

router.post("/tasks", middlewareValidade.validadeTaskBody,tasksController.createdTask);

router.delete("/tasks", tasksController.deleteAll);
router.delete("/tasks/:id", tasksController.deleteById);

router.put("/tasks/:id", middlewareValidade.validadeTaskBody, tasksController.updateById);
