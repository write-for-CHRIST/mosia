import { InitMetaCommand, InitCommand } from './init'
import { Command, CommandType } from './Command'

export { Command, CommandType } from './Command'
export { InitCommand } from './init'
export const cmdList: Command[] = [InitMetaCommand]
