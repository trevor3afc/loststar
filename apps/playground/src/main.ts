import { initLogger } from '@loststar/helper/logger';
import { startBasic } from './app/basic';

const appInitializer = async () => {
  initLogger({
    colors: {
      error: 'red',
    },
  });
};

(async () => {
  await appInitializer();
  await startBasic();
})();
