export function coreInitializer(): string {
  return 'core-initializer';
}

export const startInitializer = async ({
  loggerConfig,
}: {
  loggerConfig: Record<string, string>;
}) => {
  console.log({
    loggerConfig,
    startInitializer: true,
  });
};
