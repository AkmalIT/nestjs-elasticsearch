import { Injectable, LoggerService } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class CustomLoggerService implements LoggerService {
  constructor(@InjectPinoLogger() private readonly logger: PinoLogger) {}

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace?: string) {
    this.logger.error({ message, trace });
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.trace(message);
  }
}
