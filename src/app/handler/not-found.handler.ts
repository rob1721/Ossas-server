import response from "../modules/response.module";
import { Request, Response } from "express";

export default function notFoundHandler(req: Request, res: Response){
  if(req.baseUrl === ''){
    response.success(req, res, 'API working')
  }
  else {
    response.error(req, res, 'Not Found', 404);
  }
}
