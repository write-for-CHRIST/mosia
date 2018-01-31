export enum CommandType {
  GLOBAL = 'global',
  PACKAGE = 'package',
  DOCKER = 'docker',
  NPM = 'npm',
}

export interface CommandOption {
  flags: string
  description: string
}

export interface Command {
  name: string
  alias?: string
  type: string
  description: string
  options?: CommandOption[]
  action: (...args: any[]) => void
}
