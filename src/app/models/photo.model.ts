export interface Photo{
  _id?: string,
  title: string;
  description: string;
  imagePath?: string;
  uid: string;
  updatedAt?: Date;
  createdAt?: Date;
}