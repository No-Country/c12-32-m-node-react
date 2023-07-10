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

@ApiTags('Registro - Pets')
@Controller('api/v1/pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() createAuthDto: CreatePetsDto) {
    return this.petsService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
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
