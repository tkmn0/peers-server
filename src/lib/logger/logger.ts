import { configure, getLogger } from 'log4js';
import LogLevel from './logLevel';

export default class Logger {
  private static logLevel: LogLevel = 'off';

  public static logger(type: string) {
    const logger = getLogger(type);
    logger.level = this.logLevel;
    return logger;
  }

  static setup(level: LogLevel) {
    this.logLevel = level;
    configure({
      appenders: {
        console: {
          type: 'console',
        },
      },
      categories: {
        default: { appenders: ['console'], level: 'error' },
      },
    });
  }
}
