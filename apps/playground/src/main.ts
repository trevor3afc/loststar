import { initLogger } from '@loststar/helper/logger';
import { getLogLevelColors } from '@loststar/utils/makeup';
import { startBasic } from './app/basic';
import { format } from 'winston';
const { combine, splat, timestamp, printf } = format;
const appName = 'playground';
const appInitializer = async () => {
  const appLogFormatA = printf(({ level, message, timestamp, ...metadata }) => {
    let msg = `${timestamp} [${level}] : ${message} `;
    if (metadata) {
      msg += JSON.stringify(metadata);
    }
    return msg;
  });
  const appLogFormatB = printf((info) => {
    const { timestamp: dateTime, level, message, metadata: data } = info;
    return `${dateTime} [${appName}] ${level.toUpperCase()}: ${message} ${
      data && JSON.stringify(data)
    }`;
  });
  initLogger({
    level: 'silly',
    format: combine(appLogFormatB),
  });
};

(async () => {
  await appInitializer();
  await startBasic();
})();
