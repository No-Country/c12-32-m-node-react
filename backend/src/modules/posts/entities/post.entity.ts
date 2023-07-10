import { BasedEntity } from "src/modules/shared/entities/base.entity";
import { Entity,Column, OneToMany, ManyToOne } from "typeorm";
import { PostCommentEntity } from "./post_comment.entity";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { PostImagesEntity } from "./post_images.entity";
import { PetsEntity } from "src/modules/pets/entities/pet.entity";


@Entity({name:"posts"})
export class PostEntity extends BasedEntity {

@Column({type:"varchar"})
title:string

@Column({type:"varchar"})
details:string

@Column({type:"varchar", array: true,nullable:true })
type_publication:string[]


@Column({type:"bool",default:null,nullable:true})    
is_found:boolean

@Column({type:"int"})
likes:number

@ManyToOne(()=> PetsEntity,(pet)=>pet.posts)
pets:PetsEntity
@OneToMany(()=> PostImagesEntity,(image)=>image.post)
images:PostImagesEntity[]
@ManyToOne(()=> UserEntity,(users)=> users.posts)
user:UserEntity
@OneToMany(()=> PostCommentEntity,(comment)=>comment.posts)
comments:PostCommentEntity[]
}
