import { Request } from 'express';

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  description: string | null;
  profileImage: fileUpload[];
  updatedAt: Date;
  createdAt: Date;
  isFriend: Boolean;
}

export interface fileUpload {
  id?: number;
  url?: string;
  userId?: string;
  createdAt?: Date;
}

export interface IRequest extends Request {
  user: IUser | null;
  token: string;
  refreshTokens: string[];
  expiresAt: number;
}
