import { Request, Response, NextFunction } from 'express';
import { IRequest } from 'types/user';
import {
  createdComment,
  getCommentByDiaryId,
  updatedComment,
  deletedComment,
} from '../services/commentService';

// 댓글 작성
export const createComment = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  /* #swagger.tags = ['Comment']
    #swagger.security = [{
      "bearerAuth": []
    }] 
    #swagger.summary = '댓글 작성'
  */
  const authorId = req.user.id;
  const inputData = req.body;
  const diary_id: string = req.params.diaryId;

  const comment = await createdComment(inputData, authorId, diary_id);
  res.json(comment);
};

// 댓글 조회
export const getComment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  /* #swagger.tags = ['Comment']
    #swagger.summary = '댓글 조회'
  */
  const diary_id: string = req.params.diaryId;
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 8;

  const comment = await getCommentByDiaryId(diary_id, page, limit);
  res.json(comment);
};

// 댓글 수정
export const updateComment = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  /* #swagger.tags = ['Comment']
    #swagger.security = [{
      "bearerAuth": []
    }] 
    #swagger.summary = '댓글 수정'
  */
  const comment_id: string = req.params.commentId;
  const inputData = req.body;
  const authorId = req.user.id;

  const comment = await updatedComment(inputData, comment_id, authorId);

  return res.json(comment);
};

//댓글 삭제
export const deleteComment = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  /* #swagger.tags = ['Comment']
    #swagger.security = [{
      "bearerAuth": []
    }] 
    #swagger.summary = '댓글 삭제'
  */
  const comment_id: string = req.params.commentId;
  const authorId = req.user.id;

  const comment = await deletedComment(comment_id, authorId);

  return res.json(comment);
};
