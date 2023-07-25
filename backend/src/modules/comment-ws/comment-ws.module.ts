import { Module } from '@nestjs/common';
import { CommentWsService } from './comment-ws.service';
import { CommentWsGateway } from './comment-ws.gateway';

@Module({
  providers: [CommentWsGateway, CommentWsService]
})
export class CommentWsModule {}
