import { Command, CommandType } from './Command'

export class InitCommand {
  action(bar: string, foo: string) {
    console.log('Mosia initialized!!', bar, foo)
  }
}

export const InitMetaCommand: Command = {
  name: 'init',
  description: 'init mosia config file for the current project.',
  alias: 'i',
  type: CommandType.GLOBAL,
  action: new InitCommand().action
}
