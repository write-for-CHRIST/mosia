// External import
import chalk from 'chalk'
import readPkg from 'read-pkg'
import Conf from 'conf'

// Internal import
import * as log from '../../utils/logger'
import ConfigManager from '../../utils/config-manager'
import { ConfOptions } from '../../models/Config'
import { ConfigKey, defaultConfig } from '../../constants/config'
import { Command, CommandType } from '../../models/Command'
import { IPromptInitInput, getInitOption } from './prompt'

/**
 * Init the local project with mosia.json file
 * @param {IPromptInitInput} initInput User input for init command
 * @param {ConfOptions<any>} explicitConfig Used for unit test to explicit some options such as `cwd`
 */
export const init = ({ monorepo = true }: IPromptInitInput, explicitConfig?: ConfOptions<any>) => {
  const projectConfig: ConfOptions<any> = explicitConfig || {
    ...defaultConfig,
    cwd: './',
  }
  const cm = new ConfigManager(projectConfig)
  cm.setMonorepo(monorepo)

  log.success(`Created mosia.json in ${cm.getConf().path}`)
}

/**
 * Default run action.
 */
export const run = async () => {
  try {
    const answer = await getInitOption()
    init(answer)
    return true
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Main action for `init` command
 */
export const action = () => {
  run()
    .then(() => {
      log.success('Successfully initialize Mosia for your project!')
    })
    .catch(err => log.error(err))
}

export const InitMetaCommand: Command = {
  name: 'init',
  description: 'Initial setup the project.',
  alias: 'i',
  type: CommandType.GLOBAL,
  action,
}
