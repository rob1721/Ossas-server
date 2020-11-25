export interface Album {
  _id?: string;
  name: string;
  posts?: string[];
  // likes?: string[];
  // coments?: string[];
  updatedAt?: Date;
  createdAt?: Date;
}