import { coreService } from '@loststar/core-service';

import { test001 } from './debug';
export const startInitial = async () => {
  const core = coreService();
  console.log({
    core,
  });
  await test001();
};
