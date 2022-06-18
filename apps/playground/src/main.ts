import { initLogger } from '@loststar/helper/logger';
import { startBasic } from './app/basic';

const appInitializer = async () => {
  initLogger({
    levels: {},
  });
};

(async () => {
  await appInitializer();
  await startBasic();
})();
