import utils from '../utils';
import { ICoreService } from './../types/core';
export const coreService: ICoreService = {
  debug: {
    name: 'core-service',
  },
  //services: {} as unknown,
  //configs: {} as unknown,
  utils,
};
