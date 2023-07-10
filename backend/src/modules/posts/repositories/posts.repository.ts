import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/modules/shared/repositories';
import { PostEntity } from '../entities/post.entity';

@Injectable()
export class PostRepository extends BaseRepository<PostEntity> {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postEntity: Repository<PostEntity>,
  ) {
    super(postEntity);
  }
}
