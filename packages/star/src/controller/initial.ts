import { coreService } from '@loststar/core-service';

export const startInitial = async () => {
  const core = coreService();
  console.log({
    core,
  });
};
