import repository from "./album.repository";
import { Album } from "../../models/album.model";

function getAlbums(): Promise<Album[]>{
  return repository.getAlbums();
}

function getAlbum(id: string): Promise<Album | null>{
  return repository.getAlbum(id);
}

function addAlbum(album: Album): Promise<Album>{
  album.name = album.name.toLowerCase();
  album.createdAt = new Date();
  album.updatedAt = album.createdAt;
  return repository.addAlbum(album);
}

function updateAlbum(id: string, album: Partial<Album>): Promise<Album | null>{
  if(album.name){
    album.name = album.name.toLowerCase();
  }
  album.updatedAt = new Date();
  return repository.updateAlbum(id, album);
}

function deleteAlbum(id: string): Promise<Album | null>{
  return repository.deleteAlbum(id);
}

export default { getAlbums, getAlbum, addAlbum, updateAlbum, deleteAlbum }
