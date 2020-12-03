import model from "./photo.schema";
import { Photo } from "../../models/photo.model";

import upload from "../../modules/multer.module";

async function getPhotos(): Promise<Photo[]> {
  return model.find();
}

async function getPhoto(id: string): Promise<Photo | null> {
  return model.findOne({ _id: id });
}

async function addPhoto(photoo: Photo): Promise<Photo> {
  return model.create<Photo>(photoo);
}

async function updatePhoto(id: string, photo: Partial<Photo>) {
  return model.findByIdAndUpdate({_id: id}, photo);
}

async function deletePhoto(id: string): Promise<Photo | null> {
  return model.findByIdAndDelete({_id: id});
}

export default { getPhotos, getPhoto, addPhoto, updatePhoto, deletePhoto }