import { BasedEntity } from "src/modules/shared/entities/base.entity"
import { Entity,Column, ManyToOne } from "typeorm";
import { PostEntity } from "./post.entity";

@Entity({name:"post_images"})
export class PostImagesEntity extends BasedEntity{
    
    @Column({ type: 'varchar',array:true, nullable: false })
    images: string[];

    @ManyToOne(()=>PostEntity,(posts)=>posts.images)
    post:PostEntity
}