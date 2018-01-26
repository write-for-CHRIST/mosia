export enum CommandType {
  GLOBAL = 'global',
  PACKAGE = 'package',
  DOCKER = 'docker',
  NPM = 'npm'
}

export interface Command {
  name: string
  alias?: string
  type: string
  description: string
  action: (...args: any[]) => void
}
