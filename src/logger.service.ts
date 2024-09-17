import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-logstash';

export class AppLogger implements LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        // new winston.transports.Logstash({
        //   port: 5044,
        //   host: 'localhost',
        //   node_name: 'nestjs',
        // }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, { trace });
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
