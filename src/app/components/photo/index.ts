import express, { Express } from "express";
import router from "./photo.network";

const photo: Express = express();
photo.use('/photo', router);

export default photo;