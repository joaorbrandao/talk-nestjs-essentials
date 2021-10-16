import { CacheModule, Module } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  imports: [CacheModule.register({ ttl: 0 })],
  providers: [CacheService],
  exports: [CacheService],
})
export class CustomCacheModule {}
