import { Command } from 'commander'
import { action, subAction } from './pkg'

describe('pkg.ts', () => {
  it('should run action and invoke subAction', () => {
    const subAct = jest.fn()
    action(subAct)('add', 'new-package')
    expect(subAct).toBeCalled()
  })

  it('should register commands for subAction', () => {
    const program = new Command()
    subAction([process.argv[0], process.argv[1]], program)
    expect(program.command.length).toBeGreaterThan(0)
  })
})
