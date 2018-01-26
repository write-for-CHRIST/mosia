// External import
import commander from 'commander'

// Internal import
import { Command } from './commands/Command'
import { cmdList } from './commands'
import logo from './logo'

export default class Mosia {
  /**
   * Register all the exported command in ./commands/index.ts
   * @param cmdList List of exported commands
   */
  registerAllCmd(cmdList: Command[]) {
    for (let i = 0; i < cmdList.length; i++) {
      const curCmd = cmdList[i]
      const cmd = commander.command(curCmd.name)
      curCmd.description && cmd.description(curCmd.description)
      curCmd.alias && cmd.alias(<string>curCmd.alias)
      cmd.action(curCmd.action)
    }
  }

  /**
   * Run mosia cli app
   * @param argv
   */
  run(argv: string[]) {
    commander.version('0.1.0').description(logo)
    this.registerAllCmd(cmdList)
    commander.parse(argv)
  }
}
const mosia = new Mosia()
mosia.run(process.argv)
