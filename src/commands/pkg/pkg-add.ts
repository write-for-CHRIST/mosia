import { ConfigPackage } from '../../models/Config'
import { getConfig, success, error } from '../../utils'

/**
 * Add package operation.
 * @param pack
 * @param explicitConfig
 */
export default (name: string, { path }: any) => {
  const pack: ConfigPackage = { name, path: path }
  const cm = getConfig()
  if (cm.addPackage(pack)) {
    success(`Added package ${pack.name} successfully!`)
  } else {
    error(`Something went wrong, please check package name and try again!`)
  }
}
