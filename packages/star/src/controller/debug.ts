import { coreService } from '@loststar/core-service';

import { ICoreService } from '@loststar/core-service/types/core';
const utils = coreService().utils;
export const test001 = async () => {
  const cs: ICoreService = {
    debug: {
      name: 'test001',
    },
  };
  utils.benchmark.startBench({ name: 'test001' });
  await utils.common.sleep(1000);
  console.log({
    debug: {
      cs,
    },
  });
  utils.benchmark.endBench({ name: 'test001' });
};
