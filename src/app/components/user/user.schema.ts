import { Schema, model, Document } from "mongoose";
import { User } from "../../models/user.model";

const definition: Partial<Record<keyof User, any>> = {
  name: { type: String, required: true },
  pass: { type: String },
  email: { type: String },
  avatar: { type: String, required: true },
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<User> = new Schema (definition);

export default model<User & Document> ('User', schema, 'user');