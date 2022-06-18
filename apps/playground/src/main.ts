import { initLogger } from '@loststar/helper/logger';
import { getLogLevelColors } from '@loststar/utils/makeup';
import { startBasic } from './app/basic';

const appInitializer = async () => {
  initLogger({
    level: 'silly',
    colors: getLogLevelColors(),
  });
};

(async () => {
  await appInitializer();
  await startBasic();
})();
