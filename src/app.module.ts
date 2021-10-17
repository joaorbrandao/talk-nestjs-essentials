import { Module } from '@nestjs/common';
import { BackupModule } from './backup/backup.module';
import { SensorsModule } from './sensors/sensors.module';
import { CatsModule } from './cats/cats.module';
import { ActuatorsModule } from './actuators/actuators.module';
import { CustomCacheModule } from './cache/cache.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HardwareModule } from './hardware/hardware.module';

@Module({
  imports: [
    //TODO: Remove next line before demo.
    ScheduleModule.forRoot(),
    CustomCacheModule,
    BackupModule,
    HardwareModule,
    CatsModule,
    SensorsModule,
    ActuatorsModule,
  ],
})
export class AppModule {}
