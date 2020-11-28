export interface Comment {
  _id?: string;
  author: string;
  comment: string;
  date?: Date;
  updatedAt?: Date;
  createdAt?: Date;
}