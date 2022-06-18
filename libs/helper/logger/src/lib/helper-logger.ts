import winston from 'winston';

export function helperLogger(): string {
  return 'helper-logger';
}
type AppLogLevel =
  | 'error'
  | 'warn'
  | 'info'
  | 'http'
  | 'verbose'
  | 'debug'
  | 'silly';

let instance: winston.Logger;

export const initLogger = ({
  levels,
}: {
  levels: winston.LoggerOptions['levels'];
}) => {
  instance = winston.createLogger({
    levels,
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
  (level: AppLogLevel) => (message: string, data?: Record<string, unknown>) => {
    if (!instance) {
      throw new Error(
        'Logger instance has not been initialized. Call init() before logging.'
      );
    }

    instance[level](message, data);
  };

const error = getLogFunction('error');
const warn = getLogFunction('warn');
const info = getLogFunction('info');
const http = getLogFunction('http');
const verbose = getLogFunction('verbose');
const debug = getLogFunction('debug');
const silly = getLogFunction('silly');

export const logger = {
  error,
  warn,
  info,
  http,
  verbose,
  debug,
  silly,
};
