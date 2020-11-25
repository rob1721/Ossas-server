import express, { Request, Response, Router } from "express";
import response from "../../modules/response.module";
import controller from "./like.controller";
import { Like } from "../../models/like.model";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Like[] = await controller.getLikes();
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: Like | null = await controller.getLike(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const like: Like = req.body;
  
  try {
    const result: Like = await controller.addLike(like);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const like: Partial<Like> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Like | null = await controller.updateLike(id, like);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: Like | null = await controller.deleteLike(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;
