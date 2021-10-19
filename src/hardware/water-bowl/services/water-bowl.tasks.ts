import { Injectable } from '@nestjs/common';
import { WaterLevelSensorService } from '../../../sensors/water-level-sensor.service';
import { WaterPumpService } from '../../../actuators/water-pump.service';

@Injectable()
export class WaterBowlTasks {
  constructor(
    private waterLevelSensorService: WaterLevelSensorService,
    private waterPumpService: WaterPumpService,
  ) {}
  //TODO: Implement a task to refill the water bowl when it needs.
}
