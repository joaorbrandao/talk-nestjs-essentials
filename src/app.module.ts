import { Module } from '@nestjs/common';
import { BackupModule } from './backup/backup.module';
import { SensorsModule } from './sensors/sensors.module';
import { CatsModule } from './cats/cats.module';
import { ActuatorsModule } from './actuators/actuators.module';
import { CustomCacheModule } from './cache/cache.module';
import { HardwareModule } from './hardware/hardware.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    // ScheduleModule.forRoot(),
    CustomCacheModule,
    BackupModule,
    HardwareModule,
    CatsModule,
    SensorsModule,
    ActuatorsModule,
  ],
})
export class AppModule {}
