import repository from "./category.repository";
import { Category } from "../../models/category.model";

function getCategorys(): Promise<Category[]>{
  return repository.getCategorys();
}

function getCategory(id: string): Promise<Category | null>{
  return repository.getCategory(id);
}

function addCategory(category: Category): Promise<Category>{
  category.nameCat = category.nameCat.toLowerCase();
  category.createdAt = new Date();
  category.updatedAt = category.createdAt;
  return repository.addCategory(category);
}

function updateCategory(id: string, category: Partial<Category>): Promise<Category | null>{
  if(category.nameCat){
    category.nameCat = category.nameCat.toLowerCase();
  }
  category.updatedAt = new Date();
  return repository.updateCategory(id, category);
}

function deleteCategory(id: string): Promise<Category | null>{
  return repository.deleteCategory(id);
}

export default { getCategorys, getCategory, addCategory, updateCategory, deleteCategory }
