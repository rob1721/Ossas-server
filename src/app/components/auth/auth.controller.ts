import repository from "./auth.repository";
import { Auth } from "../../models/auth.model";
import authModule from "../../modules/auth.module";
import bcrypt from "jsonwebtoken"; // encriptar la clave (ojo q puede estar la solucion en el modulo auth)

function userSignUp(user: any): Promise<any>{
  user.createdAt = new Date();
  user.updatedAt = user.createdAt;
  
  return repository.userSignUp(user);
}

async function userLogIn(user: any) {
  if( !user.email || !user.password){
    return Promise.reject();
  }
  
  const userFound = await repository.userLogIn(user);

  if(!userFound || user.password !== userFound.password) {
    return Promise.reject();
  }

  const { _id, name, email, password } = userFound as any;
  const token: string = authModule.sing({ user: userFound._id });
  const result = { _id, name, email, password, token };

  return result;
}

export default { userSignUp, userLogIn };
