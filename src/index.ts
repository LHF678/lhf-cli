import * as program from 'commander';
import { getVersion } from './utils';

const version = getVersion();

program
  .version(version, '-v, --version')
  .usage('<command> [options]');



