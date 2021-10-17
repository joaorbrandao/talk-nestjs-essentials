import { Injectable, Logger } from '@nestjs/common';
import { WaterBowl } from '../hardware/water-bowl/water-bowl';
import props from '../../config/props';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class WaterLevelSensorService {
  private readonly logger = new Logger(WaterLevelSensorService.name);

  constructor(private cacheManager: CacheService) {}

  /**
   * Simulate a sensor measuring the amount of water in the bowl.
   */
  public async readAmountOfWaterInBowl(): Promise<number> {
    const waterBowl =
      (await this.cacheManager.get<WaterBowl>(props.hardware.waterBowl.key)) ||
      new WaterBowl();

    this.logger.log(`Level of water in the bowl: ${waterBowl.amountOfWater}`);
    return waterBowl.amountOfWater;
  }
}
