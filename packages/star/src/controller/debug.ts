import { coreService } from '@loststar/core-service';
const utils = coreService().utils;
export const test001 = async () => {
  utils.benchmark.startBench({ name: 'test001' });
  console.log({
    app: 'test001',
  });
  await utils.common.sleep(1000);
  utils.benchmark.endBench({ name: 'test001' });
};
