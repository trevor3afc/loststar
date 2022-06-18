import winston from 'winston';

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
  colors,
  level = 'info',
}: {
  colors: Record<string, string>;
  level?: winston.LoggerOptions['level'];
}) => {
  winston.addColors(colors);
  instance = winston.createLogger({
    level,
    //format: winston.format.json(),
    defaultMeta: { service: 'unknown-service' },
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
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
