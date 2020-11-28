export interface Like {
  _id?: string;
  user: string;
  totalLikes?: number; // iniciado en 0
  updatedAt?: Date;
  createdAt?: Date;
}