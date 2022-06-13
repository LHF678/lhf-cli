"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const bin_1 = require("./bin");
const utils_1 = require("./utils");
const version = (0, utils_1.getVersion)();
commander_1.program
    .version(version, '-v, --version')
    .usage('<command> [options]');
/**
 * 添加一个项目工程
 */
commander_1.program
    .command('add <template-name>')
    .description('添加项目工程模板')
    .action(bin_1.add);
commander_1.program.parse(process.argv);
