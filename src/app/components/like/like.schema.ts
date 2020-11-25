import { Schema, model, Document } from "mongoose";
import { Like } from "../../models/like.model";

const definition: Partial<Record<keyof Like, any>> = {
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  totalLikes: { type: Number, default: 0 },
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<Like> = new Schema (definition);

export default model<Like & Document> ('Like', schema, 'like');