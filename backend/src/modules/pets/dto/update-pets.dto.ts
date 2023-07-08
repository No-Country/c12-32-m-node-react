import { PartialType } from '@nestjs/mapped-types';
import { CreatePetsDto } from './create-pets.dto';

export class UpdatePetsDto extends PartialType(CreatePetsDto) {}
