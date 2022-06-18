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

export const getLogLevelColors = () => {
  let colors = {};
  for (const item in LogLevelColorHexs) {
    colors = {
      ...colors,
      [item]: LogLevelColorHexs[item as keyof typeof LogLevelColorHexs],
    };
  }
  return colors;
};

export const logColor = ({
  str,
  level,
}: {
  str: string;
  level: LogLevelColorHexs;
}) => {
  const color = chalk.hex(level);
  return color(str);
  //const color = chalk.green('#FFA500');
  //const output = `${chalk.hex('#FB9966')(str)}`;
  //return chalk.hex(level)(str);
};
