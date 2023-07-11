import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('Registro de Usuarios')
@Controller('api/v1/user-register/')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: UserService) {}

  /*@Post()
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }*/

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.authService.findOneBy({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.update({ id }, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.delete({ id });
  }

  @Post('create')
  @ApiProperty({
    description: 'Registrar nuevo usuario',
  })
  createUserEncrypt(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUserEncrypt(createUserDto);
  }

  @Post('login')
  @ApiProperty({
    description: 'Login de usuario',
  })
  loginUser(@Body() loginDto: LoginUserDto) {
    return this.authService.loginUser(loginDto);
  }
}
