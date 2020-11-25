export interface User {
  _id?: string;
  name: string;
  pass?: string;
  email?: string;
  avatar: string;
  posts?: string[];
  albums?: string[];
  following?: string[];
  followers?: string[];
  updatedAt?: Date;
  createdAt?: Date;
}