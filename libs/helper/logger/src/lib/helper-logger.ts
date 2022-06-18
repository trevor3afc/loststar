import winston from 'winston';

export function helperLogger(): string {
  return 'helper-logger';
}

const createLogger = () => {
  return winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'unknown-service' },
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });
};

export const logger = createLogger();
