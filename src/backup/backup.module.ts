import { Module } from '@nestjs/common';
import { SensorsModule } from '../sensors/sensors.module';
import { ActuatorsModule } from '../actuators/actuators.module';
import { BackupWaterTasks } from './backup-water-tasks.service';
import { CustomCacheModule } from '../cache/cache.module';

@Module({
  imports: [CustomCacheModule, SensorsModule, ActuatorsModule],
  providers: [BackupWaterTasks],
})
export class BackupModule {}
