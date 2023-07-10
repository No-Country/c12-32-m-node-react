import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BaseService } from '../shared/services';
import { PostEntity } from './entities/post.entity';
import { PostRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService extends BaseService<PostEntity> {
  constructor(private readonly postRepository:PostRepository){
    super(postRepository)
  }
}
