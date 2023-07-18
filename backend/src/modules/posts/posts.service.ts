import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BaseService } from '../shared/services';
import { PostEntity } from './entities/post.entity';
import { PostRepository } from './repositories/posts.repository';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class PostsService extends BaseService<PostEntity> {
  constructor(private readonly postRepository:PostRepository){
    super(postRepository)
  }

  async createPost(data:CreatePostDto){
    return await this.postRepository.PostCreate(data)
  }

  async getPostByUser(id_user:string){
    return await this.postRepository.getAllPostByuser(id_user)
  }

  async createCommentPost(user_id:string,comment:CreateCommentDto,post_id:string){
    return await this.postRepository.createComments(user_id,comment,post_id)
  }
}
