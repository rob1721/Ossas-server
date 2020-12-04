import { Schema, model, Document } from "mongoose";
import { Photo } from "../../models/photo.model";

const definition: Partial<Record<keyof Photo, any>> = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String },
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<Photo> = new Schema (definition);

export default model<Photo & Document> ('Photo', schema, 'photo');