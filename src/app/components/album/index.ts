import express, { Express } from "express";
import router from "./album.network";

const album: Express = express();
album.use('/album', router);

export default album;