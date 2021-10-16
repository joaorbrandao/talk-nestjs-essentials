import { Module } from '@nestjs/common';
import { SensorsModule } from '../sensors/sensors.module';
import { WaterPumpService } from './water-pump.service';
import { CustomCacheModule } from '../cache/cache.module';

@Module({
  imports: [CustomCacheModule, SensorsModule],
  providers: [WaterPumpService],
  exports: [WaterPumpService],
})
export class ActuatorsModule {}
