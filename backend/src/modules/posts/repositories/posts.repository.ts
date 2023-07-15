import { Injectable,  BadRequestException,
  InternalServerErrorException, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/modules/shared/repositories';
import { PostEntity } from '../entities/post.entity';

import { CreatePostDto } from '../dto/create-post.dto';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { PetsEntity } from 'src/modules/pets/entities/pet.entity';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { PostCommentEntity } from '../entities/post_comment.entity';



@Injectable()
export class PostRepository extends BaseRepository<PostEntity> {
  constructor(
    @InjectRepository(PostEntity)
    private readonly commentEntity: Repository<PostCommentEntity>,
    private readonly postEntity: Repository<PostEntity>,
    private readonly petEntity:  Repository<PetsEntity>,
    private readonly userEntity: Repository<UserEntity>,
  ) {
    super(postEntity);
  }

  
async PostCreate(data:CreatePostDto){
  const{user_id,pet_id,...body}=data
try {
  const pets=await this.petEntity.findOne({where:{id:pet_id}})
  if(!pets)throw new BadRequestException("pets dont exist")
  const user=await this.userEntity.findOne({where:{id:user_id}})
  if(!user)throw new BadRequestException("user dont exist")
  const post=this.postEntity.create({
    ...body,
    user,
    pets
  })
  await this.postEntity.save(post)
  return post
} catch (error) {
   throw new InternalServerErrorException("check your data")
}
}

async getAllPostByuser(user_id:string){
try {
  const posts=await this.postEntity.find({where:{user:{id:user_id}}})
  if(!posts) throw new BadRequestException("user dont exist")
  return posts
} catch (error) {
  throw new InternalServerErrorException("check your data")
}
}

async createComments(user_id:string,comments:CreateCommentDto,post_id:string){
try {
  const user=await this.userEntity.findOne({where:{id:user_id}})
  const posts=await this.postEntity.findOne({where:{id:post_id}})
  if(!posts) throw new BadRequestException("posts dont exist")
  const comment=this.commentEntity.create({
    ...comments,
    user,
    posts
  })
  await this.commentEntity.save(comment)
  return {comment,message:"created succesfully"}
} catch (error) {
  throw new InternalServerErrorException("check your data")  
}
}

}