import { Module } from '@nestjs/common';
import { RespuestaService } from './services/respuesta.service';
import { JwtUtil } from './services/jwt.util';
@Module({
  providers: [RespuestaService, JwtUtil],
  exports: [RespuestaService, JwtUtil],
})
export class SharedModule {}
