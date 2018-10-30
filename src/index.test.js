import logger from './index.js'

describe('recost-logger', function () {
  it('import should return an object with two functions, before and after', function () {
    window.localStorage.clear()
    expect(Object.keys(logger).length).toEqual(2)
    expect(typeof logger.before).toEqual('function')
    expect(typeof logger.after).toEqual('function')
  })

  it('calling before function should return undefined', function () {
    window.localStorage.clear()
    expect(logger.before()).toEqual(undefined)
  })

  it('calling after function should return undefined', function () {
    window.localStorage.clear()
    expect(logger.after()).toEqual(undefined)
  })
})
