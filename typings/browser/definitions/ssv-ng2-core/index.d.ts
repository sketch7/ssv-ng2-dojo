// Generated by typings
// Source: node_modules/ssv-ng2-core/_artifact/typings/logging/logger.service.d.ts
declare module '~ssv-ng2-core/_artifact/typings/logging/logger.service' {
import { ILog } from '~ssv-ng2-core/_artifact/typings/logging/logger.model';
export class LoggerService {
    log(logType: string, message: string, data?: any): void;
}
export class Log implements ILog {
    private sourceId;
    private logger;
    constructor(sourceId: string, logger: LoggerService);
    debug(method: string, message?: string, data?: any): void;
    info(method: string, message?: string, data?: any): void;
    warn(method: string, message?: string, data?: any): void;
    error(method: string, message?: string, data?: any): void;
    private log(type, method, message?, data?);
    private buildLogMessage(method, message?);
}
}
declare module 'ssv-ng2-core/_artifact/typings/logging/logger.service' {
export * from '~ssv-ng2-core/_artifact/typings/logging/logger.service';
}

// Generated by typings
// Source: node_modules/ssv-ng2-core/_artifact/typings/logging/logger.factory.d.ts
declare module '~ssv-ng2-core/_artifact/typings/logging/logger.factory' {
import { ILog } from '~ssv-ng2-core/_artifact/typings/logging/logger.model';
import { LoggerService } from '~ssv-ng2-core/_artifact/typings/logging/logger.service';
export class LoggerFactory {
    private loggerService;
    constructor(loggerService: LoggerService);
    getInstance(sourceId: string): ILog;
}
}
declare module 'ssv-ng2-core/_artifact/typings/logging/logger.factory' {
export * from '~ssv-ng2-core/_artifact/typings/logging/logger.factory';
}

// Generated by typings
// Source: node_modules/ssv-ng2-core/_artifact/typings/logging/logger.model.d.ts
declare module '~ssv-ng2-core/_artifact/typings/logging/logger.model' {
export const enum LogType {
    Debug = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
}
export interface ILog {
    debug(method: string, message?: string, data?: any): void;
    info(method: string, message?: string, data?: any): void;
    warn(method: string, message?: string, data?: any): void;
    error(method: string, message?: string, data?: any): void;
}
}
declare module 'ssv-ng2-core/_artifact/typings/logging/logger.model' {
export * from '~ssv-ng2-core/_artifact/typings/logging/logger.model';
}

// Generated by typings
// Source: node_modules/ssv-ng2-core/_artifact/typings/logging/logging.d.ts
declare module '~ssv-ng2-core/_artifact/typings/logging/logging' {
export * from '~ssv-ng2-core/_artifact/typings/logging/logger.service';
export * from '~ssv-ng2-core/_artifact/typings/logging/logger.factory';
export * from '~ssv-ng2-core/_artifact/typings/logging/logger.model';
export const LOGGER_PROVIDERS: any;
}
declare module 'ssv-ng2-core/_artifact/typings/logging/logging' {
export * from '~ssv-ng2-core/_artifact/typings/logging/logging';
}

// Generated by typings
// Source: node_modules/ssv-ng2-core/_artifact/typings/index.d.ts
declare module '~ssv-ng2-core/_artifact/typings/index' {
export * from '~ssv-ng2-core/_artifact/typings/logging/logging';
}
declare module 'ssv-ng2-core/_artifact/typings/index' {
export * from '~ssv-ng2-core/_artifact/typings/index';
}
declare module 'ssv-ng2-core' {
export * from '~ssv-ng2-core/_artifact/typings/index';
}
