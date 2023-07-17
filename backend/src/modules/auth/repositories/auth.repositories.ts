import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { BaseRepository } from 'src/modules/shared/repositories';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { RespuestaService } from '../../shared/services';
import { LoginUserDto } from '../dto/login-user.dto';
import { JwtPayload } from '../strategies';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  _main = 'UserRepository';
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    private respuestaService: RespuestaService,
    private readonly jwtService: JwtService,
  ) {
    super(userEntity);
  }
  async createUserEncrypt(createUserDto: CreateUserDto) {
    const ruta = this._main + ' /createUserEncrypt';
    try {
      const { password, ...userData } = createUserDto;
      const user = this.userEntity.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });
      const resp = await this.userEntity.save(user);
      if (!resp) {
        return this.respuestaService.respuestaHttp(
          false,
          null,
          ruta,
          'Error en el Registro',
        );
      }
      const respCom = {
        token: this.getJwtToken({ id: resp.id, email: resp.email }),
      };
      return this.respuestaService.respuestaHttp(
        true,
        respCom,
        ruta,
        'Registro Exitoso',
      );
    } catch (error) {
      return this.respuestaService.respuestaHttp(
        false,
        null,
        ruta,
        'Error en el Registro comuniquese con soporte',
      );
    }
  }

  async loginUser(loginDto: LoginUserDto) {
    const ruta = this._main + ' /loginUser';
    try {
      const { password, email } = loginDto;

      const user = await this.userEntity.findOne({
        where: { email },
        select: { email: true, password: true, id: true },
      });

      if (!user)
        return this.respuestaService.respuestaHttp(
          false,
          null,
          ruta,
          'Error en el Usuario',
        );
      if (!bcrypt.compareSync(password, user.password))
        return this.respuestaService.respuestaHttp(
          false,
          null,
          ruta,
          'Error en Credenciales',
        );
      const respCom = {
        token: this.getJwtToken({ id: user.id, email: user.email }),
      };
      return this.respuestaService.respuestaHttp(
        true,
        respCom,
        ruta,
        'Login Exitoso',
      );
    } catch (error) {
      return this.respuestaService.respuestaHttp(
        false,
        null,
        ruta,
        'Error en el Registro comuniquese con soporte',
      );
    }
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
