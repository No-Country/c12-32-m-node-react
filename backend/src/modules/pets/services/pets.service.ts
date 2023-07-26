import { Injectable, Param, BadRequestException,} from '@nestjs/common';
import { BaseService } from 'src/modules/shared/services';
import { PetsEntity } from '../entities/pet.entity';
import { PetsRepository } from '../repositories/pets.repositories';
import { CreatePetsDto } from '../dto/create-pets.dto';
import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
import { PetsImagesRepository } from '../repositories/pets-images.repositories';
import { ApiGatewayTimeoutResponse } from '@nestjs/swagger';
import { UserRepository } from 'src/modules/auth/repositories/auth.repositories';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { UpdatePetsDto } from '../dto/update-pets.dto';
import { DataSource, Repository } from 'typeorm';
import { PetsImagesEntity } from '../entities/pets-images.entity';
import { PostCommentEntity } from '../entities/pets-comment.entity';
import { CreateCommentsDto } from '../dto/create-comment.dto';

@Injectable()
export class PetsService extends BaseService<PetsEntity> {
  constructor(
    private readonly configService: ConfigService,
    private readonly userRepository: UserRepository,
    private readonly petsRepository: PetsRepository,
    private readonly petsImagesRepository:PetsImagesRepository,
    private readonly petsCommentRepository:Repository<PostCommentEntity>,
    private readonly dataSource:DataSource,
    ) {
    super(petsRepository);
  }

  async createComment(pets_id:string,user_id:string,commentsBody:string){
try {
  const pets=await this.petsRepository.findOne({where:{id:pets_id}})
  const user=await this.userRepository.findOne({where:{id:user_id}})
  const comments=this.petsCommentRepository.create({
    user,
   comment:commentsBody,
   pets
  })
  await this.petsCommentRepository.save(comments)
} catch (error) {
  throw error
}
  }

async CreateLikes(pets_id:string,user_id:string){
try {
  const findPet=await this.petsRepository.findOne({where:{id:pets_id}})
  const pets_update=await this.petsRepository.update({id:pets_id},{likes:findPet.likes+1})
  return pets_update
} catch (error) {
  throw error
}
}

  async createPetsByU(data: CreatePetsDto,user_id:string,file:Express.Multer.File,) {
    try {
      // Configuration cloudinary
      cloudinary.config({
        cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
        api_key: this.configService.get('CLOUDINARY_API_KEY'),
        api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
      });
      const user=await this.userRepository.findOne({where:{id:user_id}})
      const photoUrl = await cloudinary.uploader.upload(`${file.path}`, {
        public_id: `${file.filename}`,
      });
      const secureUrl = `${photoUrl.secure_url}`;
      let{images=[secureUrl],is_found,...dataBody}=data
      if(is_found=="false")is_found=false
      if(is_found=="true")is_found=true
      const petsPost=this.petsRepository.create({
        ...dataBody,
        is_found,
        user
      })
      await this.petsRepository.save(petsPost)
       images.map(async(image) =>{
       const imageZ= this.petsImagesRepository.create({ url: image,pets:petsPost })
         await this.petsImagesRepository.save(imageZ)
      })
     delete petsPost.user
     return petsPost

    } catch (error) {
      throw error.message
    }
  }
  
  async updatePets(
    id: string,
    updatePetsDto:UpdatePetsDto,
    user: UserEntity,
    file?: Express.Multer.File,
  ){
    try {
      cloudinary.config({
        cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
        api_key: this.configService.get('CLOUDINARY_API_KEY'),
        api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
      });
  
      // eslint-disable-next-line prefer-const
      let { images, ...petsDetail } = updatePetsDto;
  
      let secureUrl: any;
  
      if (file) {
        const photoUrl = await cloudinary.uploader.upload(`${file.path}`, {
          public_id: `${file.filename}`,
        });
        secureUrl = `${photoUrl.secure_url}`;
        images = [secureUrl];
      }
  
      const pets = await this.petsRepository.preload({
        id,
        ...petsDetail,
      });
  
      if (!pets)
        throw new BadRequestException(`Product with id: ${id} not found`);
  
      const queryRunner = this.dataSource.createQueryRunner();
      queryRunner.connect();
      queryRunner.startTransaction();
  
      try {

  
        if (images) {
          await queryRunner.manager.delete(PetsImagesEntity, { pets: { id } });
  
          pets.images = images.map((image) =>
            this.petsImagesRepository.create({ url: image }),
          );
        }
  
        pets.user = user;
  
        await queryRunner.manager.save(pets);
        await queryRunner.commitTransaction();
        await queryRunner.release();
  
        return pets;
      } catch (error) {
        await queryRunner.rollbackTransaction();
        await queryRunner.release();
      }
    
    } catch (error) {
      
    }
  }

  async getPetsByUser(user_id: string) {
    return await this.petsRepository.getAllpetsByuser(user_id);
  }

  async findPets(id: string) {
    return await this.petsRepository.findPets(id);
  }
}
