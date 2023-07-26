import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { PetsService } from '../services/pets.service';
import { CreatePetsDto } from '../dto/create-pets.dto';
import { UpdatePetsDto } from '../dto/update-pets.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorators/auth.decorator';
import { ValidRoles } from '../../auth/strategies';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilter } from 'src/modules/shared/helpers/fileFilter.helper';
import { fileNamer } from 'src/modules/shared/helpers/fileNamer.helper';
import { getUser } from 'src/modules/auth/decorators/get-user.decorator';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { CreateCommentsDto } from '../dto/create-comment.dto';

@ApiTags('Registro - Pets')
@Controller('api/v1/pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Auth(ValidRoles.USER)
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        filename: fileNamer,
      }),
    }),
  )
  PetsCreate(
    @getUser() user:UserEntity,
    @UploadedFile() file: Express.Multer.File,
    @Body() createAuthDto: CreatePetsDto
    ) {
  if (!file) throw new BadRequestException('Make sure that the file is an image');
       
    return this.petsService.createPetsByU(createAuthDto,user.id,file);
  }

  @Auth(ValidRoles.USER)
  @Post("pets_commets/:id")
  createComment(
    @Body() comment:string,
    @getUser() user:UserEntity,
    @Param('id') id: string
    ) {
    return this.petsService.createComment(id,user.id,comment);
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Auth(ValidRoles.USER)
  @Get('pets_user_all/:id')
  findPetsByuser(
    @getUser() user:UserEntity,
    ) {
    return this.petsService.getPetsByUser(user.id);
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.petsService.findOneBy({ id });
  }

  @Auth(ValidRoles.USER)
  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        filename: fileNamer,
      }),
    }),
  )
  updatePets(
    @Param('id') id: string,
    @Body() updatePetsDto: UpdatePetsDto,
    @getUser() user: UserEntity,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.petsService.updatePets(id, updatePetsDto, user, file);
  }

/*
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
*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.delete({ id });
  }
}
