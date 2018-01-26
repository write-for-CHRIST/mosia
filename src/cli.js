const meow = require("meow")
const chalk = require("chalk")
const Mosia = require("./mosia.umd")

const logo = `
  [..       [..    [....       [.. ..  [..      [.       
  [. [..   [...  [..    [..  [..    [..[..     [. ..     
  [.. [.. [ [..[..        [.. [..      [..    [.  [..    
  [..  [..  [..[..        [..   [..    [..   [..   [..   
  [..   [.  [..[..        [..      [.. [..  [...... [..  
  [..       [..  [..     [.. [..    [..[.. [..       [.. 
  [..       [..    [....       [.. ..  [..[..         [..
`

const cli = () => {
  const options = {
    description: false
  }
  const globalCommands = [
    `${chalk.green("init")}: initialize Mosia for current project.`,
    `${chalk.green("registry <subcommand>")}: registry related commands.`,
    `${chalk.green("npm <subcommand>")}: npm related commands.`
  ]
  const projectCommands = [
    `${chalk.green("add <package-name>")}: add new package to the current project.`,
    `${chalk.green("pkg <package-name>:add")}: proxy of ${chalk.yellow("npm install")} command.`,
    `${chalk.green("pkg <package-name>:remove")}: proxy of ${chalk.yellow("npm uninstall")} command.`,
    `${chalk.green("cmd <package-name>:<npm-scripts>")}: run a script defined in specific package.`
  ]
  return meow(
    `
    ${logo}

    Usage
      ${chalk.green(`$ mosia <command> <command>`)} ${chalk.dim.green(
      "[<args>] [--help] [options]"
    )}

    Global Commands:
      ${globalCommands.join("\r\n      ")}
    
    Project Commands:
      ${projectCommands.join("\r\n      ")}
  `,
    options
  )
}

const mosia = new Mosia()
mosia.cmd(cli())
