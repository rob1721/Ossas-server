import { Schema, model, Document } from "mongoose";
import { Post } from "../../models/post.model";

const definition: Partial<Record<keyof Post, any>> = {
  image: { type: String, required: true },
  title: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: 'Like' }],
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  date: { type: Date },
  description: { type: String, default: '' },
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<Post> = new Schema (definition);

export default model<Post & Document> ('Postt', schema, 'post');