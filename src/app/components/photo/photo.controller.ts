import repository from "./photo.repository";
import { Photo } from "../../models/photo.model";

function getPhotos(): Promise<Photo[]> {
    return repository.getPhotos();
}

function getPhoto(id: string): Promise<Photo | null> {
    return repository.getPhoto(id);
}

function addPhoto(photoo: Photo): Promise<Photo> {
    return repository.addPhoto(photoo);
}

function updatePhoto(id: string, photoo: Partial<Photo>): Promise<Photo | null> {
    return repository.updatePhoto(id, photoo);
}

function deletePhoto(id: string): Promise<Photo | null> {
    return repository.deletePhoto(id);
}

export default { getPhotos, getPhoto, addPhoto, updatePhoto, deletePhoto }
