import { Module } from '@nestjs/common';
import { WaterBowlTasks } from './water-bowl/services/water-bowl.tasks';
import { SensorsModule } from '../sensors/sensors.module';
import { ActuatorsModule } from '../actuators/actuators.module';
import { PhoneNotifierService } from './phone/phone-notifier.service';
import { WaterBowlPublisher } from './water-bowl/services/water-bowl.publisher';
import { WaterBowlSubscriber } from './water-bowl/services/water-bowl.subscriber';

@Module({
  imports: [
    SensorsModule,
    ActuatorsModule,
    // RabbitMQModule.forRoot(RabbitMQModule, {
    //   exchanges: [
    //     {
    //       name: 'water-bowl',
    //       type: 'topic',
    //     },
    //   ],
    //   uri: 'amqp://localhost:5672',
    // }),
  ],
  providers: [
    PhoneNotifierService,
    WaterBowlTasks,
    WaterBowlPublisher,
    WaterBowlSubscriber,
  ],
  exports: [PhoneNotifierService],
})
export class HardwareModule {}
