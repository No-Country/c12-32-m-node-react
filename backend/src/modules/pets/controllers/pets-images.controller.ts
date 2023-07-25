// pets-images.controller.ts
import {
  Controller,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PetsImagesService } from '../services/pets-images.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Registro - Pets-Images')
@Controller('pets-images')
export class PetsImagesController {
  constructor(private readonly petsImagesService: PetsImagesService) {}

  /*
  @Post(':petsId')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadImages(
    @Param('petsId') petsId: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    //return files;
    return this.petsImagesService.createPetsImagesRepository(petsId, files);
  }
  */
}
