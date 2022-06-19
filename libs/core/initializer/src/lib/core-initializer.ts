export function coreInitializer(): string {
  return 'core-initializer';
}

export const startInitializer = async ({
  logConfig,
}: {
  logConfig: {
    levelColor: Record<string, string>;
  };
}) => {
  console.debug({
    logConfigType: typeof logConfig,
    levelColorType: typeof logConfig.levelColor,
    logConfig,
    startInitializer: true,
  });
};
