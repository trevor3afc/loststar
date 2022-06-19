import { EAppLogLevel, initLogger } from '@loststar/helper/logger';
import { getBaseLogLevelColors, logColor } from '@loststar/utils/makeup';
import { startBasic } from './app/basic';
import { format } from 'winston';
import { startInitializer } from '@loststar/core/initializer';
const { combine, timestamp, printf, metadata } = format;

const appName = 'playground';
const appInitializer = async () => {
  await startInitializer({
    logConfig: {
      levelColor: {
        ['bbb' as keyof typeof EAppLogLevel]: '#CB4042',
      },
    },
  });

  //   const logColors = getBaseLogLevelColors();
  //   console.log({
  //     logColorsType: typeof logColors,
  //     logColors,
  //   });

  //   const appLogFormatB = combine(
  //     timestamp({
  //       format: 'YYYY-MM-DD HH:mm:ss',
  //     }),
  //     metadata({
  //       fillExcept: ['message', 'level', 'timestamp'],
  //     }),
  //     printf((info) => {
  //       const typedInfo = info;
  //       const { timestamp: dateTime, level, message, metadata: data } = typedInfo;
  //       const msg = logColor({
  //         str: message,
  //         level: getBaseLogLevelColors()[level],
  //       });
  //       const logData = Object.keys(data).length >= 1 ? JSON.stringify(data) : '';
  //       return `${dateTime} [${appName}] ${level.toUpperCase()}: ${msg} ${logData}`;
  //     })
  //   );
  //   initLogger({
  //     level: 'silly',
  //     format: appLogFormatB,
  //   });
};

(async () => {
  await appInitializer();
  await startBasic();
})();
