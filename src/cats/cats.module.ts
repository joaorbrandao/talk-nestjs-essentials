import { Module } from '@nestjs/common';
import { CatsTasks } from './cats-tasks.service';
import { CustomCacheModule } from '../cache/cache.module';

@Module({
  imports: [CustomCacheModule],
  providers: [CatsTasks],
})
export class CatsModule {}
