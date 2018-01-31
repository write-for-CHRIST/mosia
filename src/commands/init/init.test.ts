// Node import
import fs from 'fs'
import { join } from 'path'

// External import
import { directory } from 'tempy'

// Internal import
import { init } from './init'
import { setTimeout } from 'timers'
import { ConfOptions } from '../../models/Config'
import { ConfigKey } from '../../constants/config'

const cwd = directory() /* ? */
const confOpts: ConfOptions<any> = {
  configName: 'mosia',
  cwd,
  defaults: {
    [ConfigKey.PACKAGES]: [],
  },
}

describe('init command', () => {
  it('should init project', done => {
    init({ monorepo: true }, confOpts)
    setTimeout(() => {
      fs.readFile(join(cwd, `${confOpts.configName}.json`), 'utf8', (err, data) => {
        if (!err) {
          const mosiaConfig = JSON.parse(data)
          expect(mosiaConfig).toHaveProperty(ConfigKey.PACKAGES)
          expect(mosiaConfig).toHaveProperty(ConfigKey.MONOREPO)
          done()
        } else {
          done()
        }
      })
    }, 1000)
  })
})
