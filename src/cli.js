const meow = require('meow')
const Mosia = require('./mosia.umd')

const cli = () => {
  return meow(`
    Usage
    $ mosia <command>

    mosia
  `)
}

const mosia = new Mosia()
mosia.cmd(cli())