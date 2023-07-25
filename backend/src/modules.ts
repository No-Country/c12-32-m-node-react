import { AuthModule } from './modules/auth/auth.module';
import { CommentWsModule } from './modules/comment-ws/comment-ws.module';
import { PetsModule } from './modules/pets/pets.module';
import { SharedModule } from './modules/shared/shared.module';

export const appModules = [AuthModule,PetsModule, SharedModule,CommentWsModule];
