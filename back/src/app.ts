import express, { Express} from "express";
import { router } from "./routes/router";

export const app: Express = express();


app.use(router)



