import { Injectable, Logger } from '@nestjs/common';
import { WaterBowl } from '../hardware/water-bowl/water-bowl';
import props from '../../config/props';
import { WaterLevelSensorService } from '../sensors/water-level-sensor.service';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class WaterPumpService {
  private readonly logger = new Logger(WaterPumpService.name);

  constructor(
    private cacheManager: CacheService,
    private waterLevelSensorService: WaterLevelSensorService,
  ) {}

  /**
   * Simulate a pump pushing water to a bowl.
   */
  public async pushWaterToBowl(): Promise<void> {
    this.logger.warn(`Pushing water to bowl...`);

    let currentAmountOfWater =
      await this.waterLevelSensorService.readAmountOfWaterInBowl();

    while (currentAmountOfWater < props.hardware.waterBowl.capacity) {
      const waterBowl: WaterBowl = { amountOfWater: ++currentAmountOfWater };

      await this.cacheManager.set(props.hardware.waterBowl.key, waterBowl);

      currentAmountOfWater =
        await this.waterLevelSensorService.readAmountOfWaterInBowl();
    }
    this.logger.warn(`...finish pumping!`);
  }
}
