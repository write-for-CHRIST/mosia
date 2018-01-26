import { Questions } from 'inquirer'

export const initQuestions: Questions = [
  {
    type: 'confirm',
    name: 'monorepo',
    message: 'Is this project a monorepo?',
    default: true
  },
  {
    type: 'confirm',
    name: 'docker',
    message: 'Do you want to use Docker?',
    default: true
  }
]
