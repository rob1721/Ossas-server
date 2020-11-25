import model from "./like.schema";
import { Like } from "../../models/like.model";

async function getLikes(): Promise<Like[]>{
  return model.find()
    .populate('user');
}

async function getLike(id: string): Promise<Like | null>{
  return model.findOne({ _id: id })
    .populate('user');
}

async function addLike(like: Like): Promise<Like> {
  return model.create<Like>(like);
}

async function updateLike(id: string, like: Partial<Like>){
  return model.findOneAndUpdate({_id: id}, like);
}

async function deleteLike(id: string): Promise<Like | null>{
  return model.findOneAndDelete({_id: id});
}

export default { getLikes, getLike, addLike, updateLike, deleteLike }