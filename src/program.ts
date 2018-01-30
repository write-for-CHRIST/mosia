// External import
import { Command as Commander } from 'commander'

// Internal import
import { Command } from './models/Command'
import { cmdList } from './commands'
import logo from './logo'

export default class Program {
  public commander: Commander

  constructor(commander: Commander) {
    this.commander = commander
    this.init()
  }

  init() {
    this.commander.version('0.1.0').description(logo)
    this.registerAllCmd(cmdList)
  }

  /**
   * Register all the exported command in ./commands/index.ts
   * @param cmdList List of exported commands
   */
  registerAllCmd(cmdList: Command[]) {
    for (let i = 0; i < cmdList.length; i++) {
      const curCmd = cmdList[i]
      const cmd = this.commander.command(curCmd.name)
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
    this.commander.parse(argv)
  }
}
