import chalk from 'chalk';

export enum BaseLogLevelColorHexs {
  error = '#CB4042',
  warn = '#DDD23B',
  info = '#2E5C6E',
  http = '#787878',
  verbose = '#8B81C3',
  debug = '#86C166',
  silly = '#FB9966',
}

export const getBaseLogLevelColors = (): Record<string, string> => {
  let colors = {};
  for (const item in BaseLogLevelColorHexs) {
    colors = {
      ...colors,
      [item]: BaseLogLevelColorHexs[
        item as keyof typeof BaseLogLevelColorHexs
      ] as string,
    };
  }
  return colors;
};

export const logColor = ({ str, level }: { str: string; level: string }) => {
  const color = chalk.hex(level);
  return color(str);
};
