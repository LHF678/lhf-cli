import { program } from 'commander';
import { add } from './bin';
import { getVersion } from './utils';

const version = getVersion();

program
  .version(version, '-v, --version')
  .usage('<command> [options]');

/**
 * 添加一个项目工程
 */
program
  .command('add <template-name>')
  .description('添加项目工程模板')
  .action(add);


program.parse(process.argv);
