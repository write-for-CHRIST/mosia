import { InitMetaCommand } from './init'
import { PkgMetaCommand } from './pkg'
import { Command, CommandType } from '../models/Command'

export const cmdList: Command[] = [InitMetaCommand, PkgMetaCommand]
