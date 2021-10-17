import { CronExpression } from '@nestjs/schedule';

const props = {
  backup: {
    enabled: false,
  },
  hardware: {
    waterBowl: {
      key: 'water-bowl',
      capacity: 100,
      minimumPercentageToPump: 60,
    },
  },
  sensors: {
    water: {
      cron: CronExpression.EVERY_10_SECONDS, // '* /10 * * * *'
      interval: 1000, // ms
      timeout: 1000, // ms
    },
  },
  rabbitmq: {
    host: 'localhost',
    port: 5672,
  },
};

export default props;
