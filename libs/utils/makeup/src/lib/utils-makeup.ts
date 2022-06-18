import chalk from 'chalk';

export enum LogLevelColorHexs {
  error = '#CB4042',
  warn = '#DDD23B',
  info = '#2E5C6E',
  http = '#787878',
  verbose = '#8B81C3',
  debug = '#86C166',
  silly = '#FB9966',
}

export const logColor = ({
  str,
  level,
}: {
  str: string;
  level: LogLevelColorHexs;
}) => {
  return chalk.hex(level)(str);
};
