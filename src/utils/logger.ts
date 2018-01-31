import chalk from 'chalk'

export const info = (...args: any[]): string => {
  const colored = args.map(param => chalk.whiteBright(param))
  console.log(...colored)
  return colored.join(' ')
}

export const success = (...args: any[]): string => {
  const colored = args.map(param => chalk.green(param))
  console.log(...colored)
  return colored.join(' ')
}

export const error = (...args: any[]): string => {
  const colored = args.map(param => chalk.red(param))
  console.error(...colored)
  return colored.join(' ')
}

export const warn = (...args: any[]): string => {
  const colored = args.map(param => chalk.yellowBright(param))
  console.log(...colored)
  return colored.join(' ')
}
