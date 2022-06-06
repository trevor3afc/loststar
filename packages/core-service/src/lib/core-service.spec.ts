import { coreService } from './core-service';

describe('coreService', () => {
  it('should work', () => {
    const cs = coreService();
    console.log({
      cs,
    });
    expect(cs.debug.name).toEqual('core-service');
  });
});
