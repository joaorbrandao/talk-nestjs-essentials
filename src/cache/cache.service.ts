import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async set<T>(key: string, data: any): Promise<T> {
    return this.cacheManager.set<T>(key, data);
  }

  async get<T>(key: string): Promise<T> {
    return this.cacheManager.get<T>(key);
  }
}
