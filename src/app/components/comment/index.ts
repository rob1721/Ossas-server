import express, { Express } from "express";
import router from "./comment.network";

const comment: Express = express();
comment.use('/comment', router);

export default comment;