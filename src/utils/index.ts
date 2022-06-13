import * as dayjs from 'dayjs';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageJson = require('../../package.json');

/**
 * 获取当前版本号
 */
export const getVersion = () => {
  return packageJson.version;
};


export const getTime = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
};
