import { getLogger } from '@loststar/helper/logger';
import { benchmarkEnd, benchmarkStart, sleep } from '@loststar/utils/common';

const logger = getLogger();
export const main = async () => {
  logger.info('star-life:main');
};

export const runStarLife = async () => {
  benchmarkStart({
    label: 'starLife',
  });
  logger.info('star-life:runLife');
  await sleep({ ms: 3000 });
  benchmarkEnd({
    label: 'starLife',
  });
  await runStarLife();
};
