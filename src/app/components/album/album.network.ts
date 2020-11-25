import express, { Request, Response, Router } from "express";
import response from "../../modules/response.module";
import controller from "./album.controller";
import { Album } from "../../models/album.model";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Album[] = await controller.getAlbums();
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
    const result: Album | null = await controller.getAlbum(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const album: Album = req.body;
  
  try {
    const result: Album = await controller.addAlbum(album);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const album: Partial<Album> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Album | null = await controller.updateAlbum(id, album);
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
    const result: Album | null = await controller.deleteAlbum(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;
