import commander from 'commander'
import Program from './program'
import updateNotifier from 'update-notifier'
import pkg from './constants/pkg'

updateNotifier({ pkg }).notify({ isGlobal: true })

const program = new Program(commander)
program.run(process.argv)
