import Mosia from '../src/mosia'

/**
 * Dummy test
 */
describe('Mosia test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new Mosia()).toBeInstanceOf(Mosia)
  })
})
