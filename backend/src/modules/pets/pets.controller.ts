import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetsDto } from './dto/create-pets.dto';
import { UpdatePetsDto } from './dto/update-pets.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/strategies';
import { UserEntity } from '../auth/entities/user.entity';
import { getUser } from '../auth/decorators/get-user.decorator';

@ApiTags('Registro - Pets')
@Controller('api/v1/pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}
  

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  
  @Get('pets_user_all/:id')
  findPetsByuser(@Param('id') id: string) {
    return this.petsService.getPetsByUser(id);
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.petsService.findOneBy({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdatePetsDto) {
    return this.petsService.update({ id }, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.delete({ id });
  }
}
