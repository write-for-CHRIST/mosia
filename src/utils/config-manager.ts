// External import
import Conf from 'conf'
import _ from 'lodash'
import chalk from 'chalk'

// Internal import
import { Config, ConfigPackage, ConfOptions } from '../models/Config'
import { ConfigKey, defaultConfig } from '../constants/config'

export default class ConfigManager extends Config {
  conf: Conf

  constructor(public confOpts: ConfOptions<any>) {
    super()
    this.conf = new Conf(confOpts)
    this.packages = []
    this.load()
  }

  getConf(): Conf {
    return this.conf
  }

  /**
   * Load all config from Mosia config file
   */
  load() {
    this.monorepo = this.conf.get(ConfigKey.MONOREPO)
    this.packages = this.conf.get(ConfigKey.PACKAGES)
  }

  /**
   * Save all config to Mosia config file
   */
  save() {
    this.conf.set(ConfigKey.PACKAGES, this.packages)
  }

  /**
   * Get index of a added packages
   * @param name Package name to find.
   */
  getPackageIndex(name: string): number {
    return _.findIndex(this.packages, pkg => pkg.name === name)
  }

  /**
   * Check whether a package with provided name is existed or not.
   * @param name Package name to check
   */
  isPackageExists(name: string): Boolean {
    if (this.getPackageIndex(name) > -1) {
      return true
    }
    return false
  }

  /**
   * Add new packages to the config file
   * @param {ConfigPackage} newPkg New package object
   */
  addPackage(newPkg: ConfigPackage): Boolean {
    if (this.isPackageExists(newPkg.name)) {
      return false
    }

    this.packages.push(newPkg)
    _.sortBy(this.packages, 'name')
    this.save()
    return true
  }

  /**
   * Remove package from mosia.json file
   * @param name Package name.
   */
  removePackage(name: string): Boolean {
    const index = this.getPackageIndex(name)
    if (index > -1) {
      this.packages = _.filter(this.packages, pkg => pkg.name !== name)
      return true
    }
    return false
  }

  /**
   * Retrieve specific package from config file
   * @param {string} name Package name
   */
  getPackage(name: string): ConfigPackage | null {
    // Load latest config
    this.load()
    const index = this.getPackageIndex(name)
    if (index > -1) {
      return this.packages[index]
    }
    return null
  }

  /**
   * Set config monorepo or not.
   * @param {boolean} monorepo Whether the project is monorepo or not.
   */
  setMonorepo(monorepo: boolean): void {
    this.conf.set(ConfigKey.MONOREPO, Boolean(monorepo))
  }

  /**
   * Check whether the project is a monorepo or not.
   */
  isMonorepo(): boolean {
    return Boolean(this.conf.get(ConfigKey.MONOREPO))
  }
}

/**
 * Get Config Manager instance.
 * @param explicitConfig Explicit config for unit test
 */
export const getConfig = (explicitConfig?: ConfOptions<any>) => {
  const projectConfig: ConfOptions<any> = explicitConfig || {
    ...defaultConfig,
    cwd: './',
  }
  const cm = new ConfigManager(projectConfig)
  return cm
}
