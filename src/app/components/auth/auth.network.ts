/*import express, { Request, Response, Router } from "express";
import { User } from "../../models/user.model";
import response from "../../modules/response.module";
import controller from "./auth.controller";


const router: Router = express.Router();

router.post('/user/signin', async (req: Request, res: Response) => {
  const user: User = req.body;
  
  try {
    const result: User = await controller.userSignUp(user);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/user/login', async (req: Request, res: Response) => {
  const user: User = req.body;

  try {
    const result: Partial<User> = await controller.userLogIn(user);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 400);
  }
});

export default router;
*/