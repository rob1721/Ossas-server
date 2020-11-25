import { Schema, model, Document } from "mongoose";
import { Category } from "../../models/category.model";

const definition: Partial<Record<keyof Category, any>> = {
  nameCat: { type: String, required: true },
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<Category> = new Schema (definition);

export default model<Category & Document> ('Category', schema, 'category');