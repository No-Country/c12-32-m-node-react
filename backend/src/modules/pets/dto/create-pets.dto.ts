import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetsDto {


  @IsNotEmpty()
  @ApiProperty({ description: "title" })
  @IsString()
  title: string;
 
  @IsNotEmpty()
  @ApiProperty({ description: 'pet_name' })
  @IsString()
  pet_name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'pet_description' })
  @IsString()
  pet_description: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'size' })
  @IsString()
  size: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'age' })
  @IsString()
  age: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'gender' })
  @IsString()
  gender: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'lastSeen' })
  @IsString()
  lastSeen: string

  @IsString()
  @ApiProperty({ description: 'post_category' })
  post_category: string;

  @IsString()
  @ApiProperty({ description: 'phone' })
  phone: string;

  @IsString()
  @ApiProperty({ description: 'direction' })
  direction: string;

  @ApiProperty({
    description: 'Product image',
    nullable: false,
    default: 'You must upload image',
  })
  images: string[];
}
