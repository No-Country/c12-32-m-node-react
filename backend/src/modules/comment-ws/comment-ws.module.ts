import { Module } from '@nestjs/common';
import { CommentWsService } from './comment-ws.service';
import { CommentWsGateway } from './comment-ws.gateway';
import { AuthModule } from '../auth/auth.module';
import { PetsService } from '../pets/services/pets.service';
import { PetsModule } from '../pets/pets.module';
import { PetsRepository } from '../pets/repositories/pets.repositories';

@Module({
  providers: [CommentWsGateway, CommentWsService,PetsService],
  imports:[AuthModule,PetsModule]
})
export class CommentWsModule {}
