import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import props from '../../config/props';
import { WaterLevelSensorService } from '../sensors/water-level-sensor.service';
import { WaterPumpService } from '../actuators/water-pump.service';
import { BackupWaterBowlPublisher } from './backup-water-bowl.publisher';

@Injectable()
export class BackupWaterTasks {
  constructor(
    private readonly waterLevelSensorService: WaterLevelSensorService,
    private readonly waterPumpService: WaterPumpService,
    private readonly waterBowlPublisher: BackupWaterBowlPublisher,
  ) {}
  /**
   * Check for water in the bowl and push more if needed.
   */
  // @Interval(props.backup.sensors.water.interval)
  // @Timeout()
  @Cron(props.sensors.water.cron)
  public async refillBowlIfNeeded(): Promise<void> {
    if (!props.backup.enabled) return;

    const currentAmountOfWater =
      await this.waterLevelSensorService.readAmountOfWaterInBowl();

    if (
      this.bowlNeedsWater(
        currentAmountOfWater,
        props.hardware.waterBowl.capacity,
      )
    ) {
      await this.waterBowlPublisher.lowLevelOfWater({
        levelOfWater: currentAmountOfWater,
        date: new Date(),
      });

      await this.waterPumpService.pushWaterToBowl();
    }
  }

  private bowlNeedsWater(currentLevel: number, capacity: number): boolean {
    const percentageLevel = (currentLevel / capacity) * 100;

    return percentageLevel < props.hardware.waterBowl.minimumPercentageToPump;
  }
}
