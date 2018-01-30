// External import
import Conf from 'conf'
import _ from 'lodash'
import chalk from 'chalk'

// Internal import
import { Config, ConfigPackage } from '../models/Config'
import { ConfigKey } from '../constants/config'

export default class ConfigManager extends Config {
  conf: Conf

  constructor(public confOpts: any) {
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
    this.packages = this.conf.get(ConfigKey.PACKAGES)
  }

  /**
   * Save all config to Mosia config file
   */
  save() {
    this.conf.set(ConfigKey.PACKAGES, this.packages)
  }

  /**
   * Add new packages to the config file
   * @param {ConfigPackage} newPkg New package object
   */
  addPackage(newPkg: ConfigPackage): Boolean {
    const index = _.findIndex(this.packages, pkg => pkg.name === newPkg.name)
    if (index > -1) {
      return false
    }
    this.packages.push(newPkg)
    _.sortBy(this.packages, 'name')
    this.save()
    return true
  }

  /**
   * Retrieve specific package from config file
   * @param {string} name Package name
   */
  getPackage(name: string): ConfigPackage {
    // Load latest config
    this.load()
    const index = _.findIndex(this.packages, pkg => pkg.name === name)
    if (index > -1) {
      return this.packages[index]
    }
    return null
  }
}
