import winston from 'winston';

export function helperLogger(): string {
  return 'helper-logger';
}

let logger: winston.Logger;

export const initLogger = async () => {
  logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'unknown-service' },
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });
  return logger;
};

export const getLogger = () => {
  if (!logger) {
    initLogger();
  }
  return logger;
};
