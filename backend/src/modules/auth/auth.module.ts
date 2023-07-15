import { Module } from '@nestjs/common';
import { UserService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from './repositories/auth.repositories';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespuestaService } from '../shared/services';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '2h',
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [UserService, UserRepository, RespuestaService,AuthGuard],
  exports: [UserService,AuthModule,AuthGuard,UserRepository,TypeOrmModule,JwtModule],
})
export class AuthModule {}
