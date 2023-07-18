export class RespuestaM {
  status: boolean;
  message: string;
  data: any;
  error: string;

  constructor() {
    this.status = true;
    this.message = 'ok';
    this.data = null;
  }

  setAll(message: string, status: boolean, data: any) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}
