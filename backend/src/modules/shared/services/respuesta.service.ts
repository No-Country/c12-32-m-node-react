import { Injectable, Logger } from '@nestjs/common';
import { RespuestaM } from './../../../core/domain/models/respuesta.model';
@Injectable()
export class RespuestaService {
  logger = new Logger();
  respuesta = new RespuestaM();

  constructor() {}

  respuestaHttp(status: boolean, data: any, ruta = '', message = '') {
    this.respuesta.status = status;
    this.respuesta.data = data;
    this.respuesta.message = message;
    this.logger.debug(
      this.respuesta.error ? this.respuesta.error + ruta : ruta,
    );
    return this.respuesta;
  }
}
