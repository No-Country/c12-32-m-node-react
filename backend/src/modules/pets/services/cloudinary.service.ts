// cloudinary.service.ts
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
import { Express } from 'express';

//import toStream = require('buffer-to-stream');
import * as toStream from 'buffer-to-stream';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  /*async uploadImage(file: Express.Multer.File): Promise<string> {
    const result = await cloudinary.uploader.upload(file.path);
    console.log(result);
    return result.secure_url;
  }*/

  async upload(file: Express.Multer.File): Promise<any> {
    console.log(file);
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      toStream(file.buffer).pipe(upload);
    });
  }
}
