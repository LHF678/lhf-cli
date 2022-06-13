import * as fs from 'fs-extra';
import * as path from 'path';
import * as inquirer from 'inquirer';
import * as download from 'download-git-repo';
import * as ora from 'ora';
import * as chalk from 'chalk';
import { getTime } from '../utils';
import { template, TemplateKey } from './config';


export default async (name: string) => {
  const targetDir = path.resolve(process.cwd(), name);
  if (fs.existsSync(targetDir)) {
    const { ok } = await inquirer.prompt([{
      type: "confirm",
      message: '文件已存在，是否覆盖？',
      name: 'ok',
    }]);
    if (ok) {
      await fs.remove(targetDir);
    } else {
      return;
    }
  }

  interface InquirerPrompt {
    type: TemplateKey
  }

  const { type }: InquirerPrompt = await inquirer.prompt([{
    type: 'list',
    name: 'type',
    message: '选择模板类型：',
    choices: [
      { name: '【Vue2】模板', value: 'vue2' },
      { name: '【Vue3】模板 --- 模板搭建中', value: 'vue3' },
      { name: '【React】模板 --- 模板搭建中', value: 'react' }
    ],
    default: 'vue2'
  }]);

  const config = template[type];
  if (!config) {
    console.log(chalk.red('$> Fail: 模板搭建中'));
    process.exit();
  }

  const { description } = await inquirer.prompt([{
    type: 'input',
    name: 'description',
    message: '请输入项目工程描述'
  }]);

  console.log();
  console.log(chalk.green('$> 开始构建，请稍侯...', getTime()));
  console.log();
  const spinner = ora('正在构建模板...').start();

  download(config.downloadUrl, name, { clone: false }, async (err: Error) => {
    if (err) {
      spinner.fail(chalk.red('❗Error: 下载模板失败'));
      console.log(chalk.red('❗Error Message: '), chalk.red(err));
      console.log(chalk.red(`❗Try: git clone ${config.url} 使用`));
      process.exit();
    } else {
      executeBuildSuccess();
    }
  });

  function executeBuildSuccess () {
    spinner.succeed(chalk.green('构建成功！', getTime()));

    const packagePath = path.join(name, 'package.json');
    try {
      // 读取 packge.json 文件修改配置
      const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      packageContent.name = name;
      packageContent.description = description;
      // 写入配置
      fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2), {
        encoding: 'utf8'
      });
    } catch (error) {
      console.log(chalk.yellow('$> Warning: write file error', error));
    }

    console.log();
    console.log(chalk.green('$> 初始化项目完成！'));
    console.log();
    console.log(chalk.blue('$> 命令提示：'));
    console.log(chalk.blue(`  # 进入项目`));
    console.log(chalk.blue(`  $ cd ./${name}`));
    console.log(chalk.blue(`  # 安装依赖`));
    console.log(chalk.blue(`  $ npm install`));
    console.log(chalk.blue(`  # 运行`));
    console.log(chalk.blue(`  $ npm run dev`));
    console.log();
  }
};
