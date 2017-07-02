import test from 'ava'
import sinon from 'sinon'
import Busx from '../src/index.js'

let dispatcher

test.beforeEach(t => dispatcher = new Busx)

test('it can add events to listen', t => {
  const handler = sinon.spy()

  dispatcher.listen('some-event', handler)

  t.truthy(handler.notCalled)
})

test('it can fire a event', t => {
  const handler = sinon.spy()

  dispatcher.listen('some-event', handler)

  dispatcher.fire('some-event')

  t.truthy(handler.calledOnce)
})


test('it can fire a event with data', t => {
  const handler = sinon.spy()
  const data = {
    username: 'admin'
  }

  dispatcher.listen('some-event', handler)

  dispatcher.fire('some-event', data)

  t.truthy(handler.withArgs(data).calledOnce)
})

test('it can return all events registered', t => {
  const handler = sinon.spy()

  dispatcher.listen('some-event', handler)
  dispatcher.listen('second-event', handler)

  t.deepEqual(dispatcher.all(), [
    { key: 'some-event', handler },
    { key: 'second-event', handler }
  ])
})

test('it can add multiples handlers to a event', t => {
  const handler = sinon.spy()

  dispatcher.listen('some-event', handler)
  dispatcher.listen('some-event', handler)

  dispatcher.fire('some-event')

  t.truthy(handler.calledTwice)
})

test('it should only fire the handlers associate with the key', t => {
  const handler = sinon.spy()

  dispatcher.listen('some-event', handler)
  dispatcher.listen('some-event', handler)
  dispatcher.listen('different-event', handler)

  dispatcher.fire('some-event')

  t.truthy(handler.calledTwice)
})
