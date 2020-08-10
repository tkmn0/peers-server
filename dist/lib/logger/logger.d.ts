import LogLevel from './logLevel';
export default class Logger {
    private static logLevel;
    static logger(type: string): import("log4js").Logger;
    static setup(level: LogLevel): void;
}
