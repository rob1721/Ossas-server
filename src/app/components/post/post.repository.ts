import model from "./post.schema";
import { Post } from "../../models/post.model";

async function getPosts(): Promise<Post[]>{
  return model.find()
    .populate('categories')
    .populate('comments');
}

async function getPost(id: string): Promise<Post | null>{
  return model.findOne({ _id: id })
    .populate('categories')
    .populate('comments');
}

async function addPost(post: Post): Promise<Post> {
  return model.create<Post>(post);
}

async function updatePost(id: string, post: Partial<Post>){
  return model.findOneAndUpdate({_id: id}, post);
}

async function deletePost(id: string): Promise<Post | null>{
  return model.findOneAndDelete({_id: id});
}

export default { getPosts, getPost, addPost, updatePost, deletePost }