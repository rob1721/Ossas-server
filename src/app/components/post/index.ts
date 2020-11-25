import express, { Express } from "express";
import router from "./post.network";

const post: Express = express();
post.use('/post', router);

export default post;