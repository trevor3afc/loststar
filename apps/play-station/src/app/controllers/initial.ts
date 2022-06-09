import { getLogger } from '@loststar/helper/logger';
import { initMediaServer } from './medis-server';

export const startinitial = async () => {
  initMediaServer();
  getLogger().info('startinitial');
};
