import { Module } from '@nestjs/common';
import { WaterLevelSensorService } from './water-level-sensor.service';
import { CustomCacheModule } from '../cache/cache.module';

@Module({
  imports: [CustomCacheModule],
  providers: [WaterLevelSensorService],
  exports: [WaterLevelSensorService],
})
export class SensorsModule {}
