import model from "./category.schema";
import { Category } from "../../models/category.model";

async function getCategorys(): Promise<Category[]>{
  return model.find()
}

async function getCategory(id: string): Promise<Category | null>{
  return model.findOne({ _id: id })
}

async function addCategory(category: Category): Promise<Category> {
  return model.create<Category>(category);
}

async function updateCategory(id: string, category: Partial<Category>){
  return model.findOneAndUpdate({_id: id}, category);
}

async function deleteCategory(id: string): Promise<Category | null>{
  return model.findOneAndDelete({_id: id});
}

export default { getCategorys, getCategory, addCategory, updateCategory, deleteCategory }