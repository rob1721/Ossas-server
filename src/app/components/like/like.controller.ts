import repository from "./like.repository";
import { Like } from "../../models/like.model";

function getLikes(): Promise<Like[]>{
  return repository.getLikes();
}

function getLike(id: string): Promise<Like | null>{
  return repository.getLike(id);
}

function addLike(like: Like): Promise<Like>{
  like.createdAt = new Date();
  like.updatedAt = like.createdAt;
  return repository.addLike(like);
}

function updateLike(id: string, like: Partial<Like>): Promise<Like | null>{
  like.updatedAt = new Date();
  return repository.updateLike(id, like);
}

function deleteLike(id: string): Promise<Like | null>{
  return repository.deleteLike(id);
}

export default { getLikes, getLike, addLike, updateLike, deleteLike }
