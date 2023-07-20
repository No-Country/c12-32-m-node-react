import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetsDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'name' })
  @IsString()
  name: string;

  @IsString()
  @ApiProperty({ description: 'description' })
  description: string;

  @IsNumber()
  @ApiProperty({ description: 'size' })
  size: number;

  @IsNumber()
  @ApiProperty({ description: 'age' })
  age: number;

  @IsString()
  @ApiProperty({ description: 'gender' })
  gender: string;

  @IsString()
  @ApiProperty({ description: 'lastSeen' })
  lastSeen: string;

  @IsString()
  @ApiProperty({ description: 'category' })
  category: string;

  @IsString()
  @ApiProperty({ description: 'phone' })
  phone: string;

  @IsString()
  @ApiProperty({ description: 'direction' })
  direction: string;

  @IsString()
  @ApiProperty({ description: 'descriptionPublication' })
  descriptionPublication: string;

  @IsString()
  @ApiProperty({ description: 'token' })
  token: string;
}
