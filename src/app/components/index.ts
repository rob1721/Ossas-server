import { Express } from "express";

import album from "./album";
import auth from "./auth";
import category from "./category";
import comment from "./comment";
import like from "./like";
import photo from "./photo";
import post from "./post";
import user from "./user";

const components: Express[] = [
  album,
  auth,
  category,
  comment,
  like,
  photo,
  post,
  user
];

export default components;