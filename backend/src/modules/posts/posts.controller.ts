import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { getUser } from '../auth/decorators/get-user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/strategies';
import { UserEntity } from '../auth/entities/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  //@Auth(ValidRoles.USER)
  @Post()
  createPost(@Body() createAuthDto: CreatePostDto) {
    return this.postsService.createPost(createAuthDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  //@Auth(ValidRoles.USER)
  @Post("post_comment/:id")
  createComment(
    @Param('id') post_id: string,
    @getUser() user:UserEntity,
    @Body() comment: CreateCommentDto
    ){
    return this.postsService.createCommentPost(user.id,comment,post_id)
  }

  @Get('user_posts/:id')
  findPostByUser(@Param('id') user_id: string) {
    return this.postsService.getPostByUser(user_id);
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.postsService.findOneBy({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdatePostDto) {
    return this.postsService.update({ id }, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.delete({ id });
  }
}
