import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/modules/shared/repositories';
import { PetsEntity } from '../entities/pet.entity';
import { CreatePetsDto } from '../dto/create-pets.dto';
import { UserEntity } from 'src/modules/auth/entities/user.entity';

@Injectable()
export class PetsRepository extends BaseRepository<PetsEntity> {
  constructor(
    @InjectRepository(PetsEntity)
    private readonly petsEntity: Repository<PetsEntity>,
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {
    super(petsEntity);
  }

  async CreatePets(data: CreatePetsDto) {
    const { user_id, ...body } = data;
    //console.log(data);
    try {
      console.log(user_id);
      const user = await this.userEntity.findOne({
        where: { id: user_id },
      });
      console.log(user);
      if (!user) throw new BadRequestException('this user dont exist');
      const pets = this.petsEntity.create({
        ...body,
        user,
      });

      await this.petsEntity.save(pets);
      return pets;
    } catch (error) {
      throw new InternalServerErrorException('check your data');
    }
  }

  async getAllpetsByuser(user_id: string) {
    try {
      const pets = await this.petsEntity.find({
        where: { user: { id: user_id } },
      });
      if (!pets) throw new BadRequestException('user dont exist');
      return pets;
    } catch (error) {
      throw new InternalServerErrorException('check your data');
    }
  }
}
