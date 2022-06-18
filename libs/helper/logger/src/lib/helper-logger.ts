import winston from 'winston';

export function helperLogger(): string {
  return 'helper-logger';
}
export type AppLogLevel =
  | 'error'
  | 'warn'
  | 'info'
  | 'http'
  | 'verbose'
  | 'debug'
  | 'silly';

export enum EAppLogLevel {
  error = 'error',
  warn = 'warn',
  info = 'info',
  http = 'http',
  verbose = 'verbose',
  debug = 'debug',
  silly = 'silly',
}

let instance: winston.Logger;

export const initLogger = ({ colors }: { colors: Record<string, string> }) => {
  winston.addColors(colors);
  instance = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'unknown-service' },
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });
};

const getLogFunction =
  (level: EAppLogLevel) => (message: string, data?: Record<string, unknown>) => {
    if (!instance) {
      throw new Error(
        'Logger instance has not been initialized. Call init() before logging.'
      );
    }

    instance[level](message, data);
  };

const error = getLogFunction(EAppLogLevel.error);
const warn = getLogFunction(EAppLogLevel.warn);
const info = getLogFunction(EAppLogLevel.info);
const http = getLogFunction(EAppLogLevel.http);
const verbose = getLogFunction(EAppLogLevel.verbose);
const debug = getLogFunction(EAppLogLevel.debug);
const silly = getLogFunction(EAppLogLevel.silly);

const LoggerMapper = {
  []
}

export const logger = {
  error,
  warn,
  info,
  http,
  verbose,
  debug,
  silly,
};
