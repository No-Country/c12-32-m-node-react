import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createAuthDto: CreatePostDto) {
    return this.postsService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
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
