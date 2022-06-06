export interface ICoreService {
  debug: {
    name: string;
  };
  utils: {
    common: {
      sleep: ({ ms }: { ms: number }) => unknown;
    };
    benchmark: {
      startBench: ({ name }: { name: string }) => unknown;
      endBench: ({ name }: { name: string }) => unknown;
    };
  };
}
