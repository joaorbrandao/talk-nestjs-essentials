import { Module } from '@nestjs/common';
import { SensorsModule } from '../sensors/sensors.module';
import { ActuatorsModule } from '../actuators/actuators.module';
import { BackupWaterTasks } from './backup-water-tasks.service';
import { CustomCacheModule } from '../cache/cache.module';
import { BackupWaterBowlPublisher } from './backup-water-bowl.publisher';
import { BackupWaterBowlSubscriber } from './backup-water-bowl.subscriber';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import props from '../../config/props';
import { HardwareModule } from '../hardware/hardware.module';

@Module({
  imports: [
    CustomCacheModule,
    HardwareModule,
    SensorsModule,
    ActuatorsModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: `amqp://${props.rabbitmq.host}:${props.rabbitmq.port}`,
      exchanges: [{ name: 'water-bowl', options: { durable: true } }],
    }),
  ],
  providers: [
    BackupWaterTasks,
    BackupWaterBowlPublisher,
    BackupWaterBowlSubscriber,
  ],
})
export class BackupModule {}
