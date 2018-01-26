// External import
import { prompt } from 'inquirer'
import chalk from 'chalk'

// Internal import
import { Command, CommandType } from '../Command'
import { initQuestions } from './prompt'

export class InitCommand {
  readPkg() {}
  writeConfig() {}
}

const action = (bar: string, foo: string) => {
  run()
    .then(() => {
      console.log(chalk.green('Successfully initialize Mosia for your project!'))
    })
    .catch(err => console.error())
}

const run = async () => {
  try {
    const answer = await prompt(initQuestions)
    console.log(JSON.stringify(answer, null, 2))
    return true
  } catch (err) {}
}

export const InitMetaCommand: Command = {
  name: 'init',
  description: 'Initial setup the project.',
  alias: 'i',
  type: CommandType.GLOBAL,
  action
}
