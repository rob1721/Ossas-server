import express, { Express } from "express";
import router from "./like.network";

const like: Express = express();
like.use('/like', router);

export default like;