import express, { Express } from "express";
import { router } from "./tasks/tasks.router";

export const app: Express = express();

app.use(express.json());
app.use(router);
