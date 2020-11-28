export interface Post{
  _id?: string;
  image: string; // esto es una URL subida a firebase
  title: string;
  likes?: string[];
  categories?: string[];
  comments?: string[];
  date?: Date;
  description?: string;
  updatedAt?: Date;
  createdAt?: Date;
}