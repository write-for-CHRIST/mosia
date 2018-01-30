// External import
import fs from 'fs'
import Conf from 'conf'
import { directory } from 'tempy'

// Internal import
import ConfigManager from './config-manager'
import { ConfigKey } from '../constants/config'
import { ConfigPackage } from '../models/Config'

let cm: ConfigManager
const samplePkg: ConfigPackage = {
  name: 'sample',
  path: 'sample/sample',
}

describe('ConfigManager', () => {
  beforeAll(() => {
    const confOpts: any = {
      configName: 'mosia',
      cwd: directory(),
      defaults: {
        [ConfigKey.PACKAGES]: [samplePkg],
      },
    }

    try {
      cm = new ConfigManager(confOpts) /* ? */
    } catch (err) {
      console.error(err) /* ? */
    }
  })

  it('should create config file named mosia.json', done => {
    const file = cm.conf.path /* ? */
    fs.exists(file, exists => {
      expect(exists).toEqual(true)
      done()
    })
  })

  it('should read packages config', done => {
    const file = cm.conf.path /* ? */
    fs.readFile(file, 'utf8', (err, data) => {
      const json = JSON.parse(data) /* ? */
      expect(json[ConfigKey.PACKAGES]).toBeTruthy()
      done()
    })
  })

  it('should add new package to config', done => {
    const conf = cm.getConf()
    const newPkg: ConfigPackage = {
      name: 'mosia-lib',
      path: 'lib/mosia-lib',
    }

    conf.onDidChange(ConfigKey.PACKAGES, (oldVal, newVal) => {
      const newlyPackage = cm.getPackage(newPkg.name)
      expect(newlyPackage).toBeTruthy()
      expect(newlyPackage.path).toEqual(newPkg.path)
      done()
    })

    cm.addPackage(newPkg)
  })

  it('should return null if not found a package', () => {
    const conf = cm.getConf()
    const notFoundPkg = cm.getPackage('justanotherpkg')
    expect(notFoundPkg).toBeFalsy()
    expect(notFoundPkg).toEqual(null)
  })

  it('should not add dupplicate package', () => {
    const result = cm.addPackage(samplePkg)
    expect(result).toBeFalsy()
  })

  it('should set monorepo', done => {
    const conf = cm.getConf()

    conf.onDidChange(ConfigKey.MONOREPO, (oldVal, newVal) => {
      const isMonorepo = cm.isMonorepo()
      expect(isMonorepo).toBeTruthy()
      done()
    })

    cm.setMonorepo(true)
  })
})
