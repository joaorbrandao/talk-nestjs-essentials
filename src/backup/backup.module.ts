import { Module } from '@nestjs/common';
import { SensorsModule } from '../sensors/sensors.module';
import { ActuatorsModule } from '../actuators/actuators.module';
import { CustomCacheModule } from '../cache/cache.module';
import { HardwareModule } from '../hardware/hardware.module';

@Module({
  imports: [
    CustomCacheModule,
    HardwareModule,
    SensorsModule,
    ActuatorsModule,
    // RabbitMQModule.forRoot(RabbitMQModule, {
    //   uri: `amqp://${props.rabbitmq.host}:${props.rabbitmq.port}`,
    //   exchanges: [{ name: 'water-bowl', options: { durable: true } }], // This will create
    // }),
  ],
  providers: [
    // BackupWaterTasks,
    // BackupWaterBowlPublisher,
    // BackupWaterBowlSubscriber,
  ],
})
export class BackupModule {}
