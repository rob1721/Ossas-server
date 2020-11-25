import model from "./user.schema";
import { User } from "../../models/user.model";

async function getUsers(): Promise<User[]>{
  return model.find()
    .populate('posts')
    .populate('album')
    .populate('following')
    .populate('followers');
}

async function getUser(id: string): Promise<User | null>{
  return model.findOne({ _id: id })
  .populate('posts')
  .populate('album')
  .populate('following')
  .populate('followers');
}

async function addUser(user: User): Promise<User> {
  return model.create<User>(user);
}

async function updateUser(id: string, user: Partial<User>){
  return model.findOneAndUpdate({_id: id}, user);
}

async function deleteUser(id: string): Promise<User | null>{
  return model.findOneAndDelete({_id: id});
}

export default { getUsers, getUser, addUser, updateUser, deleteUser }