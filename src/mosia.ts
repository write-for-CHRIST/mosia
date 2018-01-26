import commander from 'commander'
import Program from './program'

const program = new Program(commander)
program.run(process.argv)
