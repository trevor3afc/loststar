import { looper, sleep } from '@loststar/utils/common';
import { runStarLife } from './star-life';

export const exeInitial = async () => {
  process.env.FLUENTFFMPEG_COV = 'false';
  await runStarLife();
  await sleep({ ms: 1000 });
  await looper({ ms: 1000 });
};
