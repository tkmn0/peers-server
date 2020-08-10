/// <reference types="node" />
import * as Http from 'http';
import LogLevel from './logger/logLevel';
export default class Peers {
    private socketIo;
    private rooms;
    constructor(server: Http.Server);
    start: () => void;
    setLogLevel: (level: LogLevel) => void;
    private setupEvents;
}
