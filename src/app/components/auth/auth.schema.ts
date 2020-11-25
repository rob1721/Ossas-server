/*import { Schema, model, Document } from "mongoose";
import { Auth } from "../../models/auth.model";

const definition: Partial<Record<keyof Auth, any>> = {
  password: { type: String, required: true },
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<Auth> = new Schema (definition);

export default model<Auth & Document> ('Auth', schema, 'auth');
*/