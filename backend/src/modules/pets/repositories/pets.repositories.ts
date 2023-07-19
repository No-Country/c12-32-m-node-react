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
import { RespuestaService } from '../../shared/services';
import { JwtUtil } from '../../shared/services/jwt.util';
import { PetsImagesEntity } from '../entities/pets-images.entity';

@Injectable()
export class PetsRepository extends BaseRepository<PetsEntity> {
  _main = 'PetsRepository';
  constructor(
    @InjectRepository(PetsEntity)
    private readonly petsEntity: Repository<PetsEntity>,
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    private respuestaService: RespuestaService,
    private jwtService: JwtUtil,
  ) {
    super(petsEntity);
  }

  async CreatePets(data: CreatePetsDto) {
    const ruta = this._main + ' /CreatePets';
    const { token, ...body } = data;
    const { id } = this.jwtService.decodeToken(token);
    try {
      const user = await this.userEntity.findOne({
        where: { id: id },
      });
      if (!user)
        return this.respuestaService.respuestaHttp(
          false,
          null,
          ruta,
          'No existe el usuario',
        );
      const pets = this.petsEntity.create({
        ...body,
        user,
      });

      const verificacion = await this.petsEntity.save(pets);
      if (!verificacion) {
        return this.respuestaService.respuestaHttp(
          false,
          null,
          ruta,
          'Error en el registro',
        );
      }
      return this.respuestaService.respuestaHttp(
        true,
        verificacion.id,
        ruta,
        'Registro Exitoso',
      );
    } catch (error) {
      this.respuestaService.respuestaHttp(
        false,
        null,
        ruta,
        'Error en el registro contacta con el Administrador Base de Datos',
      );
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

  async findPets(id: string) {
    const ruta = this._main + ' /findPets';
    const respuesta = await this.petsEntity.find({
      where: { id },
    });

    respuesta.forEach((pets) => {
      pets.images.forEach((image) => {
        image.images = image.images.map((imageString) =>
          JSON.parse(imageString.replace(/\\/g, '')),
        );
      });
    });

    return this.respuestaService.respuestaHttp(
      true,
      respuesta,
      ruta,
      'Lista Exitosa',
    );
  }
}
