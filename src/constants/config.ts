import pkg from './pkg'

export enum ConfigKey {
  PACKAGES = 'packages',
  MONOREPO = 'monorepo',
}

export const defaultConfig = {
  configName: 'mosia',
  cwd: './',
  defaults: {
    [ConfigKey.MONOREPO]: true,
    [ConfigKey.PACKAGES]: [],
  },
}
