import Busx from '../src/index.js'

describe('BusX test suite', () => {
  let dispatcher
  beforeEach(() => (dispatcher = new Busx()))

  it('it can add events to listen', () => {
    const handler = jest.fn()

    dispatcher.listen('some-event', handler)

    expect(handler).not.toHaveBeenCalled()
  })

  it('it can fire a event', () => {
    const handler = jest.fn()

    dispatcher.listen('some-event', handler)

    dispatcher.fire('some-event')

    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('it can fire a event with data', () => {
    const handler = jest.fn()
    const data = {
      username: 'admin',
    }

    dispatcher.listen('some-event', handler)

    dispatcher.fire('some-event', data)

    expect(handler).toHaveBeenCalledWith(data)
  })

  it('it can return all events registered', () => {
    const handler = jest.fn()

    dispatcher.listen('some-event', handler)
    dispatcher.listen('second-event', handler)

    expect(dispatcher.all()).toMatchObject([
      { key: 'some-event', handler },
      { key: 'second-event', handler },
    ])
  })

  it('it can add multiples handlers to a event', () => {
    const handler = jest.fn()

    dispatcher.listen('some-event', handler)
    dispatcher.listen('some-event', handler)

    dispatcher.fire('some-event')

    expect(handler).toHaveBeenCalledTimes(2)
  })

  it('it should only fire the handlers associate with the key', () => {
    const handler = jest.fn()

    dispatcher.listen('some-event', handler)
    dispatcher.listen('some-event', handler)
    dispatcher.listen('different-event', handler)

    dispatcher.fire('some-event')

    expect(handler).toHaveBeenCalledTimes(2)
  })
})
