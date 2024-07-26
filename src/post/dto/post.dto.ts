import { Transform } from "class-transformer";
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min, ValidateIf } from "class-validator";

// 게시글 조회 Req
export class GetPostsDto {
    @IsString()
    @IsOptional()
    target?: string;

    @IsString()
    @IsOptional()
    searchName?: string;

    @IsNumber()
    @Min(1)
    @Transform(({ value }) => Number(value))
    page: number;

    @IsNumber()
    @Min(1)
    @Transform(({ value }) => Number(value))
    pageSize: number;
}

// 게시글 작성 및 수정
export class PostPostsDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    contents?: string;

    @IsNumber()
    @IsOptional()
    @Min(1)
    travelRoute_id?: number;

    @ValidateIf((o) => o.post_id !== undefined)
    @IsNumber()
    @IsOptional()
    post_id: number;
}

// 게시글 조회 Res
export interface PostDetailDto {
    id: number;
    author: string;
    title: string;
    views: number;
    commentsCount: number;
    created_at: Date;
    travelRoute_id: number;
    like: number;
    contents?: string;
}