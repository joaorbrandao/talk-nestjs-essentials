import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { LowLevelOfWaterMessage } from '../hardware/water-bowl/messages';
import props from '../../config/props';

@Injectable()
export class BackupWaterBowlPublisher {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public lowLevelOfWater(
    lowLevelOfWaterMessage: LowLevelOfWaterMessage,
  ): Promise<void> {
    if (!props.backup.enabled) return;

    return this.amqpConnection.publish(
      'water-bowl',
      'low-level',
      lowLevelOfWaterMessage,
    );
  }
}
