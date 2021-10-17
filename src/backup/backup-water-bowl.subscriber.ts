import { Injectable } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Channel, ConsumeMessage } from 'amqplib';
import { LowLevelOfWaterMessage } from '../hardware/water-bowl/messages';
import props from '../../config/props';
import { PhoneNotifierService } from '../hardware/phone/phone-notifier.service';

@Injectable()
export class BackupWaterBowlSubscriber {
  constructor(private readonly phoneNotifier: PhoneNotifierService) {}

  @RabbitSubscribe({
    exchange: 'water-bowl',
    routingKey: 'low-level',
    queue: 'water-bowl.low-level',
    queueOptions: {
      durable: true,
      deadLetterExchange: 'water-bowl.dlx',
      deadLetterRoutingKey: 'low-level',
    },
    errorHandler: (channel: Channel, msg: ConsumeMessage) => {
      // Triggered on unhandled throws.
      // NACK with requeue as false will send to dead letter exchange.
      channel.nack({ ...msg }, false, false);
    },
  })
  public async lowLevelOfWaterHandler(message: LowLevelOfWaterMessage) {
    if (!props.backup.enabled) return;
    this.phoneNotifier.notify(
      `Low level of water in the bowl: '${message.levelOfWater}' at ${message.date}`,
    );
  }
}
