import { Router } from "express";
import { GetAllTasksController } from "../controllers/tasksControllers";

export const router = Router();

router.get("/tasks", new GetAllTasksController().getAll);