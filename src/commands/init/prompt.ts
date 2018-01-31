import { Questions, prompt } from 'inquirer'

export interface IPromptInitInput {
  monorepo: boolean
}

export const initQuestions: Questions = [
  {
    type: 'confirm',
    name: 'monorepo',
    message: 'Is this project a monorepo?',
    default: true,
  },
]

/**
 * Default run action.
 */
export const getInitOption = async (): Promise<IPromptInitInput> => {
  try {
    const answer = await prompt(initQuestions)
    const { monorepo } = answer
    return { monorepo }
  } catch (err) {
    throw new Error(err)
  }
}
