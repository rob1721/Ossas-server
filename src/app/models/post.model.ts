export interface Post{
  _id?: string;
  image: string;
  title: string;
  likes?: string[];
  categories?: string[];
  comments?: string[];
  date: Date;
  description?: string;
  updatedAt?: Date;
  createdAt?: Date;
}