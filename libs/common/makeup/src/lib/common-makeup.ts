import chalk from 'chalk';

export function commonMakeup(): string {
  return 'common-makeup';
}

export enum LogLevelColorHexs {
  error = '#CB4042',
  warn = '#DDD23B',
  info = '#0066FF',
  http = '#009900',
  verbose = '#009900',
  debug = '#0F4C3A',
  silly = '#0F4C3A',
}

export const colorString = ({ str }: { str: string }) => {
  return chalk.green(str);
};
