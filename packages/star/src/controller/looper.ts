import { coreService } from '@loststar/core-service';
import { test001 } from './debug';

export const coreLooper = async () => {
  await test001();
  await coreService.utils.common.sleep({ ms: 1000 });
  await coreLooper();
};
