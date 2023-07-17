import { BasedEntity } from "src/modules/shared/entities/base.entity";
import { Entity,Column, ManyToOne } from "typeorm";
import { PostEntity } from "./post.entity";
import { UserEntity } from "src/modules/auth/entities/user.entity";

@Entity({name:"post_comments"})
export class PostCommentEntity extends BasedEntity{
   
   @Column({type:"varchar"})
   comments: string

   @ManyToOne(()=>UserEntity,(user)=>user.comments)
   user:UserEntity

   @ManyToOne(()=>PostEntity,(post)=>post.comments)
   posts:PostEntity
}