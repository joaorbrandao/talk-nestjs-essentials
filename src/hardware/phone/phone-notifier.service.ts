import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PhoneNotifierService {
  private readonly logger = new Logger('Phone');

  public notify(message: any): void {
    this.logger.debug(message);
  }
}
