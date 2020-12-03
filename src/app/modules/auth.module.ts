import jwt from "jsonwebtoken";


function sing(payload: any){
  return jwt.sign(payload, `${process.env['SECRET_KEY']}`);
}

function verify(token: any){
  return jwt.verify(token, `${process.env['SECRET_KEY']}`);
}

export default { sing, verify };
