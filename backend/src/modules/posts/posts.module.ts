import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { PostCommentEntity } from './entities/post_comment.entity';
import { PostImagesEntity } from './entities/post_images.entity';
import { PostRepository } from './repositories/posts.repository';
import { AuthModule } from '../auth/auth.module';
import { Repository } from 'typeorm';


@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity, PostCommentEntity, PostImagesEntity]),AuthModule
  ],
  controllers: [PostsController],
  providers: [PostsService,Repository,PostRepository]
})
export class PostsModule {}
