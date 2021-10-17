import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { WaterBowl } from '../hardware/water-bowl/water-bowl';
import props from '../../config/props';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class CatsTasks {
  private readonly logger = new Logger(CatsTasks.name);

  constructor(private cacheManager: CacheService) {}
  /**
   * Simulate a cat drinking water every 30 seconds.
   * They'll be drinking N % of the water that is in their bowl.
   */
  @Cron(CronExpression.EVERY_5_SECONDS)
  public async drinkWater(): Promise<void> {
    const waterBowl =
      (await this.cacheManager.get<WaterBowl>(props.hardware.waterBowl.key)) ||
      new WaterBowl();

    if (waterBowl.amountOfWater === 0) {
      this.logger.error(
        `Cat wants to drink but water Bowl is at level '${waterBowl.amountOfWater}' of '${props.hardware.waterBowl.capacity}'`,
      );
      return;
    }

    // A cat can only drink water from 0 until the amount of water available.
    const amountOfWaterDrunkByCat =
      Math.floor(Math.random() * waterBowl.amountOfWater) + 1;
    this.logger.log(
      `Cat drunk '${amountOfWaterDrunkByCat}' levels of water from the bowl!`,
    );

    // Subtract the amount of water a cat drunk to the total amount of
    // water in the bowl.
    waterBowl.amountOfWater -= amountOfWaterDrunkByCat;

    this.logger.warn(
      `The water bowl is now at level '${waterBowl.amountOfWater}' of '${props.hardware.waterBowl.capacity}'`,
    );

    await this.cacheManager.set(props.hardware.waterBowl.key, waterBowl);
  }
}
