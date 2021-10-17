import { Module } from '@nestjs/common';
import { WaterBowlTasks } from './water-bowl/services/water-bowl.tasks';
import { SensorsModule } from '../sensors/sensors.module';
import { ActuatorsModule } from '../actuators/actuators.module';
import { PhoneNotifierService } from './phone/phone-notifier.service';

@Module({
  imports: [SensorsModule, ActuatorsModule],
  providers: [PhoneNotifierService, WaterBowlTasks],
  exports: [PhoneNotifierService],
})
export class HardwareModule {}
