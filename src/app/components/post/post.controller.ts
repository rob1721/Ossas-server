import repository from "./post.repository";
import { Post } from "../../models/post.model";

function getPosts(): Promise<Post[]>{
  return repository.getPosts();
}

function getPost(id: string): Promise<Post | null>{
  return repository.getPost(id);
}

function addPost(post: Post): Promise<Post>{
  post.title = post.title.toLowerCase();
  post.createdAt = new Date();
  post.updatedAt = post.createdAt;
  return repository.addPost(post);
}

function updatePost(id: string, post: Partial<Post>): Promise<Post | null>{
  if(post.title){
    post.title = post.title.toLowerCase();
  }
  post.updatedAt = new Date();
  return repository.updatePost(id, post);
}

function deletePost(id: string): Promise<Post | null>{
  return repository.deletePost(id);
}

export default { getPosts, getPost, addPost, updatePost, deletePost }
