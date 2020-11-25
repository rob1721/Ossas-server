import repository from "./user.repository";
import { User } from "../../models/user.model";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

function getUser(id: string): Promise<User | null>{
  return repository.getUser(id);
}

function addUser(user: User): Promise<User>{
  user.name = user.name.toLowerCase();
  user.createdAt = new Date();
  user.updatedAt = user.createdAt;
  return repository.addUser(user);
}

function updateUser(id: string, user: Partial<User>): Promise<User | null>{
  if(user.name){
    user.name = user.name.toLowerCase();
  }
  user.updatedAt = new Date();
  return repository.updateUser(id, user);
}

function deleteUser(id: string): Promise<User | null>{
  return repository.deleteUser(id);
}

export default { getUsers, getUser, addUser, updateUser, deleteUser }
