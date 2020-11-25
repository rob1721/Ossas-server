import model from "./album.schema";
import { Album } from "../../models/album.model";

async function getAlbums(): Promise<Album[]>{
  return model.find()
    .populate('posts');
}

async function getAlbum(id: string): Promise<Album | null>{
  return model.findOne({ _id: id })
    .populate('posts');
}

async function addAlbum(album: Album): Promise<Album> {
  return model.create<Album>(album);
}

async function updateAlbum(id: string, album: Partial<Album>){
  return model.findOneAndUpdate({_id: id}, album);
}

async function deleteAlbum(id: string): Promise<Album | null>{
  return model.findOneAndDelete({_id: id});
}

export default { getAlbums, getAlbum, addAlbum, updateAlbum, deleteAlbum }