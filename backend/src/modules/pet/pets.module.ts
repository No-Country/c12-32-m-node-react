import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsEntity } from './entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PetsEntity])],

  controllers: [],

  providers: [],
})
export class PetsModule {}
