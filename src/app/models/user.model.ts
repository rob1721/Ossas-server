export interface User {
  _id?: string;
  name: string;
  pass?: string;
  email?: string;
  avatar?: string;
  photos?: string[];
  albums?: string[];
  following?: string[];
  followers?: string[];
  updatedAt?: Date;
  createdAt?: Date;
}