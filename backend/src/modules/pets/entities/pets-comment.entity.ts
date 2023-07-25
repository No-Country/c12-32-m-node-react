import { BasedEntity } from "src/modules/shared/entities/base.entity";
import { Entity,Column, ManyToOne } from "typeorm";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { PetsEntity } from "./pet.entity";

@Entity({name:"post_comments"})
export class PostCommentEntity extends BasedEntity{
   
   @Column({type:"varchar"})
   comment: string

   @ManyToOne(()=>UserEntity,(user)=>user.comments)
   user:UserEntity

   @ManyToOne(()=>PetsEntity,(post)=>post.comments)
   pets:PetsEntity
}