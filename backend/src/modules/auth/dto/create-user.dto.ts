import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'nombre de usuario' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ description: 'last name' })
  lastName?: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @ApiProperty({ description: 'correo electronico' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'numero de celular' })
  phone?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'ciudad' })
  city?: string;

  @IsString()
  @IsOptional()
  isActive?: boolean;
}
