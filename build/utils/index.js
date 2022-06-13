"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = exports.getVersion = void 0;
const dayjs = require("dayjs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageJson = require('../../package.json');
/**
 * 获取当前版本号
 */
const getVersion = () => {
    return packageJson.version;
};
exports.getVersion = getVersion;
const getTime = () => {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
};
exports.getTime = getTime;
