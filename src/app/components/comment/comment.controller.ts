import repository from "./comment.repository";
import { Comment } from "../../models/comment.model";

function getComments(): Promise<Comment[]>{
  return repository.getComments();
}

function getComment(id: string): Promise<Comment | null>{
  return repository.getComment(id);
}

function addComment(comment: Comment): Promise<Comment>{
  comment.createdAt = new Date();
  comment.updatedAt = comment.createdAt;
  return repository.addComment(comment);
}

function updateComment(id: string, comment: Partial<Comment>): Promise<Comment | null>{
  comment.updatedAt = new Date();
  return repository.updateComment(id, comment);
}

function deleteComment(id: string): Promise<Comment | null>{
  return repository.deleteComment(id);
}

export default { getComments, getComment, addComment, updateComment, deleteComment }
