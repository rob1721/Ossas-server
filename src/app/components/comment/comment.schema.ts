import { Schema, model, Document } from "mongoose";
import { Comment } from "../../models/comment.model";

const definition: Partial<Record<keyof Comment, any>> = {
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
  date: { type: Date },
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<Comment> = new Schema (definition);

export default model<Comment & Document> ('Comment', schema, 'comment');