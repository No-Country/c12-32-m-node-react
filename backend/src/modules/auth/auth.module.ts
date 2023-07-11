import { Module } from '@nestjs/common';
import { UserService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from './repositories/auth.repositories';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespuestaService } from '../shared/services';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [UserService, UserRepository, RespuestaService],
  exports: [UserService],
})
export class AuthModule {}
