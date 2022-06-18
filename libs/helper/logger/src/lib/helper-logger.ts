import winston, { format } from 'winston';

export function helperLogger(): string {
  return 'helper-logger';
}
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

export const initLogger = ({
  level = 'info',
  format = winston.format.combine(winston.format.simple()),
}: {
  level?: winston.LoggerOptions['level'];
  format?: winston.LoggerOptions['format'];
}) => {
  instance = winston.createLogger({
    level,
    format: format,
    //defaultMeta: { location: 'unknown' },
    transports: [new winston.transports.Console()],
  });
};

const getLogFunction =
  (level: EAppLogLevel) =>
  (message: string, data?: Record<string, unknown>) => {
    if (!instance) {
      throw new Error(
        'Logger instance has not been initialized. Call init() before logging.'
      );
    }

    instance[level](message, data);
  };

const LoggerMapper = {
  [EAppLogLevel.error]: getLogFunction(EAppLogLevel.error),
  [EAppLogLevel.warn]: getLogFunction(EAppLogLevel.warn),
  [EAppLogLevel.info]: getLogFunction(EAppLogLevel.info),
  [EAppLogLevel.http]: getLogFunction(EAppLogLevel.http),
  [EAppLogLevel.verbose]: getLogFunction(EAppLogLevel.verbose),
  [EAppLogLevel.debug]: getLogFunction(EAppLogLevel.debug),
  [EAppLogLevel.silly]: getLogFunction(EAppLogLevel.silly),
};

export const logger = LoggerMapper;
