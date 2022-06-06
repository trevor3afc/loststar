import utils from '../utils';

export const coreService = () => {
  return {
    debug: {
      name: 'core-service',
    },
    services: {},
    configs: {},
    utils,
  };
};
