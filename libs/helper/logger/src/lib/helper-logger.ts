import winston from 'winston';

export function helperLogger(): string {
  return 'helper-logger';
}

export const initLogger = ({
  levels,
}: {
  levels: winston.LoggerOptions['levels'];
}) => {
  return winston.createLogger({
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

//export const logger = createLogger();
type Logger = winston.Logger & {
  initialized: boolean;
};

export const logger: Logger => {
  //check logger is initialized
  if (!logger.initialized) {
    throw new Error('logger is not initialized');
  }
  return initLogger({ levels: winston.config.syslog.levels });
};
