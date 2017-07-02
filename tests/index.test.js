import test from 'ava'
import sinon from 'sinon'
import Commander from '../src/index.js'

let dispatcher

test.beforeEach(t => dispatcher = new Commander)

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
  const secondHandler = sinon.spy()

  dispatcher.listen('some-event', handler)
  dispatcher.listen('second-event', secondHandler)

  t.deepEqual(dispatcher.all(), {
    'some-event': handler,
    'second-event': secondHandler
  })
})
