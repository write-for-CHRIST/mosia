import { kebabCase } from 'lodash'
import { Questions, prompt } from 'inquirer'
import { ConfigPackage } from '../../models/Config'

const pkgQuestions: Questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter package name:',
    filter: input => kebabCase(input),
  },
  {
    type: 'input',
    name: 'path',
    message: 'Enter path to package:',
  },
  {
    type: 'confirm',
    name: 'isLib',
    message: 'Is this package a library?',
  },
]

export const getPkgOption = async (): Promise<ConfigPackage> => {
  try {
    const answer = await prompt(pkgQuestions)
    const { name, path, isLib } = answer
    return { name, path, isLib }
  } catch (err) {
    throw new Error(err)
  }
}
