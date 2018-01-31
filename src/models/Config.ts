export interface ConfOptions<T> {
  defaults?: { [key: string]: T }
  configName?: string
  projectName?: string
  cwd?: string
}

export interface ConfigPackage {
  /**
   * Name of the package.
   * This option is required because it will be use to call `pkg` related commands.
   */
  name: string

  /**
   * Relative path to the package.
   * @example /server/api
   */
  path: string

  /**
   * Specify docker image.
   * @example node:8.9.1
   */
  image?: string

  /**
   * Map all exposed ports of the container.
   * You will need to specify all used ports of the package to make it works.
   * Provide this will make Mosia override ports when build docker-compose.yml file.
   * @example ["3000:3000"]
   */
  port?: string[]

  /**
   * Specify custom development dockerfile.
   *
   * If this prop is set, Mosia will try to build specific Dockerfile for development,
   * this should be a relative path from the root of your project.
   *
   * If omitted, default Dockerfile built by Mosia will be used.
   *
   * @example "Dockerfile.customDev"
   * @default Dockerfile.dev
   */
  dockerFileDev?: string

  /**
   * Specify custom production dockerfile.
   *
   * If this prop is set, Mosia will try to build specify Dockerfile for production,
   * this should be a relative path from the root of your project.
   *
   * If omitted, default Dockerfile built by Mosia will be used.
   * @default Dockerfile.prod
   */
  dockerFileProd?: string

  /**
   * Specify whether this package is a library or not.
   * If it is a library, maybe you want to link it to other packages in the npm modules.
   * @default false
   */
  isLib?: boolean
}

export class Config {
  monorepo: Boolean
  packages: ConfigPackage[]
}
