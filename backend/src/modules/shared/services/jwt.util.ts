import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtUtil {
  private readonly secretKey: string;

  constructor() {
    this.secretKey = process.env.JWT_SECRET;
  }

  decodeToken(token: string): any {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      throw new Error('Token inválido');
    }
  }
}
