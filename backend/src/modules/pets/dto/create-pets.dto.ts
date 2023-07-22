<<<<<<< HEAD
import { IsNumber, IsString } from "class-validator";

export class CreatePetsDto {
   
    @IsString()
    name: string;

    @IsString()
    description: string;
     
    @IsNumber()
    size: number;

    @IsNumber()
    age: number;

    @IsString()
    gender: string;
  
    @IsString()
    lastSeen: string;
  
    @IsString()
    race: string;

    @IsString()
    user_id:string
=======
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
  @ApiProperty({ description: 'race' })
  race: string;

  @IsString()
  @ApiProperty({ description: 'token' })
  token: string;
>>>>>>> e0f3ea3f32d22b1288a628470f43b045659e8cfe
}
