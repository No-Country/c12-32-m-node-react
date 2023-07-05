import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './repositories/auth.repositories';
import { AuthEntity } from './entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([AuthEntity])],
  controllers: [AuthController],
  providers: [AuthService,AuthRepository],
  exports:[AuthService]
})
export class AuthModule {}
