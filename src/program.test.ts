import { Command as Commander } from 'commander'
import Program from './program'
import { cmdList } from './commands'

const cmd = new Commander()
let program: Program = null
describe('Program', () => {
  beforeAll(() => {
    program = new Program(cmd)
  })

  it('instantialize the program', () => {
    expect(program).toBeInstanceOf(Program)
  })

  it('register all available command', () => {
    program.registerAllCmd(cmdList)
    expect(program.commander.commands).toHaveLength(cmdList.length + 1)
  })
})
