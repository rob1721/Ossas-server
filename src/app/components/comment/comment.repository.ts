import model from "./comment.schema";
import { Comment } from "../../models/comment.model";

async function getComments(): Promise<Comment[]>{
  return model.find()
    .populate('author')
    .populate('comment');
}

async function getComment(id: string): Promise<Comment | null>{
  return model.findOne({ _id: id })
    .populate('author')
    .populate('comment');
}

async function addComment(comment: Comment): Promise<Comment> {
  return model.create<Comment>(comment);
}

async function updateComment(id: string, comment: Partial<Comment>){
  return model.findOneAndUpdate({_id: id}, comment);
}

async function deleteComment(id: string): Promise<Comment | null>{
  return model.findOneAndDelete({_id: id});
}

export default { getComments, getComment, addComment, updateComment, deleteComment }