import * as log from './logger'

const testStr = 'Mosia Library'
describe('logger', () => {
  it('should build success log', () => {
    const output = log.success(...testStr.split(' '))
    expect(output.length).toBeGreaterThanOrEqual(testStr.length)
  })

  it('should build info log', () => {
    const output = log.info(...testStr.split(' '))
    expect(output.length).toBeGreaterThanOrEqual(testStr.length)
  })

  it('should build warn log', () => {
    const output = log.warn(...testStr.split(' '))
    expect(output.length).toBeGreaterThanOrEqual(testStr.length)
  })

  it('should build error log', () => {
    const output = log.error(...testStr.split(' '))
    expect(output.length).toBeGreaterThanOrEqual(testStr.length)
  })
})
