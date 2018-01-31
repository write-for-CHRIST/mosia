import { filter } from 'lodash'
import { Command as Commander } from 'commander'

// Utils import
import * as log from '../../utils/logger'
import ConfigManager from '../../utils/config-manager'

// Constants import
import { ConfigKey, defaultConfig } from '../../constants/config'

// Models import
import { ConfigPackage, ConfOptions } from '../../models/Config'
import { CommandType, Command } from '../../models/Command'

export const pkg = (pack: ConfigPackage, explicitConfig?: ConfOptions<any>) => {
  const projectConfig: ConfOptions<any> = explicitConfig || {
    ...defaultConfig,
    cwd: './',
  }
  const cm = new ConfigManager(projectConfig)
  const success = cm.addPackage(pack)
  if (success) {
    log.success(`Added package ${pack.name} successfully!`)
  } else {
    log.error(`Something went wrong, please check package name and try again!`)
  }
}

const subAction = (argv: string[]) => {
  const program = new Commander()
  program
    .command('add [package-name]')
    .option('-l, --library', 'Specify this package is a library.')
    .option('-p, --path', 'Provide path for this package')
    .description('Add new package to project')
    .action((packageName: string, cmd: any) => {
      log.success(`Adding new package ${packageName}! ${cmd.path}`)
    })
  program
    .command('remove [package-name]')
    .description('Remove a package from project')
    .action((packageName: string) => {
      log.success(`Removed package ${packageName}`)
    })
  program.parse(argv)
}

const action = (command: string, input: string, ...options: string[]) => {
  const argv = filter(process.argv, argument => argument !== 'pkg')
  input && subAction(argv)
}

export const PkgMetaCommand: Command = {
  name: 'pkg <command> [data]',
  description: 'Package manager',
  alias: 'p',
  type: CommandType.GLOBAL,
  options: [
    {
      flags: '-p, --path',
      description: 'Package location path',
    },
    {
      flags: '-l, --library',
      description: 'Set package to a library',
    },
  ],
  action,
}
