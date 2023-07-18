import { AuthModule } from './modules/auth/auth.module';
import { PetsModule } from './modules/pets/pets.module';
import { PostsModule } from './modules/posts/posts.module';
import { SharedModule } from './modules/shared/shared.module';

export const appModules = [AuthModule, PetsModule, PostsModule, SharedModule];
