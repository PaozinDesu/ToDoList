import { Router } from "express";
import { tasksController } from "../controllers/tasksControllers";
import { MiddlewareValidade } from '../middlewares/tasksMiddleware';

export const router = Router();

router.get("/tasks", new tasksController().getAll);
router.get("/tasks/:id", new tasksController().getById);
// router.get("/tasks/:id", new MiddlewareValidade().validadeGetTask, new tasksController().getById);

router.post("/tasks", new MiddlewareValidade().validadeTaskBody, new tasksController().createdTask);

router.delete("/tasks", new tasksController().deleteAll);
router.delete("/tasks/:id", new tasksController().deleteById);

router.put("/tasks/:id", new MiddlewareValidade().validadeTaskBody, new tasksController().updateById);
