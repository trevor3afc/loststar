import * as chalk from 'chalk';

export enum LogLevelColorHexs {
  ERROR = '#CB4042',
  WARN = '#DDD23B',
  INFO = '#2E5C6E',
  HTTP = '#787878',
  VERBOSE = '#8B81C3',
  DEBUG = '#86C166',
  SILLY = '#FB9966',
}

export const logColor = ({
  str,
  level,
}: {
  str: string;
  level: LogLevelColorHexs;
}) => {
  console.log({
    chalk,
  });
  //const color = chalk.green('#FFA500');
  //const output = `${chalk.hex('#FB9966')(str)}`;
  //return chalk.hex(level)(str);
};
