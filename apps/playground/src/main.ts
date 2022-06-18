import { initLogger } from '@loststar/helper/logger';
import { getLogLevelColors } from '@loststar/utils/makeup';
import { startBasic } from './app/basic';
import { format } from 'winston';
const { combine, splat, timestamp, printf } = format;

const appInitializer = async () => {
  const appLogFormat = printf(({ level, message, timestamp, ...metadata }) => {
    let msg = `${timestamp} [${level}] : ${message} `;
    if (metadata) {
      msg += JSON.stringify(metadata);
    }
    return msg;
  });
  initLogger({
    level: 'silly',
    format: combine(appLogFormat),
  });
};

(async () => {
  await appInitializer();
  await startBasic();
})();
