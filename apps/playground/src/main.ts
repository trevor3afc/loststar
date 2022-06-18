import { initLogger } from '@loststar/helper/logger';
import { startBasic } from './app/basic';

const appInitializer = async () => {
  initLogger({
    level: 'silly',
    colors: {},
  });
};

(async () => {
  await appInitializer();
  await startBasic();
})();
