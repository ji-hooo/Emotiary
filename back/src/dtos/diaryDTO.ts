// user.dto.ts
import {
  IsString,
  IsDate,
  IsNotEmpty,
  IsUUID,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { diaryFileUpload } from '../types/diary';
import 'reflect-metadata';
import { fileUpload } from 'types/user';

export class ApiResponseDTO {
  data: any;
  message: string;
  status: number;

  constructor(status: number, data: any, message: string) {
    this.data = data;
    this.message = message;
    this.status = status;
  }
}

export class PaginationResponseDTO extends ApiResponseDTO {
  pageInfo: any;

  constructor(status: number, data: any, pageInfo: any, message: string) {
    super(status, data, message);
    this.pageInfo = pageInfo;
  }
}
export class AuthorInDiaryDTO {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  profileImage: fileUpload[];
}

// exclude 사용해주기
export class DiaryResponseDTO {
  @Expose()
  id: string;

  @Expose()
  authorId: string;

  @Expose()
  createdDate: Date;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  is_public: string;

  @Expose()
  emoji: string;

  @Expose()
  emotion: string;

  @Expose()
  favoriteCount: number;

  @Expose()
  audioUrl: string;

  @Expose()
  @Type(() => AuthorInDiaryDTO)
  author: AuthorInDiaryDTO;

  @Expose()
  filesUpload: diaryFileUpload[];
}

export class DiaryValidateDTO {
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  createdDate?: Date;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  content: string;

  @IsOptional()
  is_public: string;

  @IsOptional()
  @IsString({ each: true })
  filesUpload: diaryFileUpload[];
}
