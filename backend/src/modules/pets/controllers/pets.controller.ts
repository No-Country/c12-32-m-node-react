import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PetsService } from '../services/pets.service';
import { CreatePetsDto } from '../dto/create-pets.dto';
import { UpdatePetsDto } from '../dto/update-pets.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorators/auth.decorator';
import { ValidRoles } from '../../auth/strategies';

@ApiTags('Registro - Pets')
@Controller('api/v1/pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  //@Auth(ValidRoles.USER)
  @Post()
  PetsCreate(@Body() createAuthDto: CreatePetsDto) {
    return this.petsService.createPets(createAuthDto);
  }

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

  @Get('pet-images/:id')
  @ApiProperty({
    description: 'lista con sus imagenes',
  })
  findPets(@Param('id') id: string) {
    return this.petsService.findPets(id);
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
