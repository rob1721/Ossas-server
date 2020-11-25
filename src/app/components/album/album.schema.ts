import { Schema, model, Document } from "mongoose";
import { Album } from "../../models/album.model";

const definition: Partial<Record<keyof Album, any>> = {
  name: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<Album> = new Schema (definition);

export default model<Album & Document> ('Album', schema, 'album');