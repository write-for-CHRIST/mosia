// External import
import { filter } from 'lodash'
import { Command as Commander } from 'commander'

// Utils import
import * as log from '../../utils/logger'
import { getConfig } from '../../utils/config-manager'

// Models import
import { ConfigPackage, ConfOptions } from '../../models/Config'
import { CommandType, Command } from '../../models/Command'

// Pkg command import
import { promptPkgAdd } from './prompt'
import pkgAdd from './pkg-add'

/**
 * Register all sub `pkg` operations.
 * @param argv
 */
export const subAction = (argv: string[], externalProgram?: any): void => {
  const program = externalProgram || new Commander()

  // pkg add <package-name>
  program
    .command('add <package-name>')
    .option('-l, --library', 'Specify this package is a library.')
    .option('-p, --path', 'Provide path for this package')
    .description('Add new package to project')
    .action((...args: any[]) => {
      // Expect: name, cmd
      pkgAdd(args[0], args[1])
    })

  // pkg remove <package-name>
  program
    .command('remove <package-name>')
    .alias('rm')
    .description('Remove a package from project.')
    .action((packageName: string) => {
      log.success(`Removed package ${packageName}`)
    })
  program.parse(argv)
}

/**
 * Main pkg action.
 * This will parse all action to its subAction.
 * @param command
 * @param input
 * @param options
 */
export const action = (subAction: (argv: string[]) => void) => (
  command: string,
  input: string,
  ...options: string[]
) => {
  const argv = filter(process.argv, argument => argument !== 'pkg')
  input && subAction(argv)
}

export const PkgMetaCommand: Command = {
  name: 'pkg <command> [data]',
  description: 'Package manager',
  alias: 'p',
  type: CommandType.PACKAGE,
  action: action(subAction),
}
