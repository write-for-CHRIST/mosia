import { kebabCase } from 'lodash'
import { Questions, prompt } from 'inquirer'
import { ConfigPackage } from '../../models/Config'

const pkgQuestions: Questions = [
  {
    type: 'input',
    name: 'path',
    message: 'Enter path to package:',
  },
  {
    type: 'confirm',
    name: 'library',
    message: 'Is this package a library?',
  },
]

export const promptPkgAdd = async (name: string): Promise<ConfigPackage | any> => {
  try {
    const answer = await prompt(pkgQuestions)
    const { path, library } = answer
    return { name, path, library }
  } catch (err) {
    throw new Error(err)
  }
}
