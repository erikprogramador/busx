module.exports = class Busx {
  constructor () {
    this.handlers = []
  }

  listen (key, handler) {
    this.handlers.push({
      key,
      handler
    })
  }

  fire (key, data = {}) {
    this.handlers
      .filter(handler => handler.key === key)
      .forEach(handler => handler.handler(data))
  }

  all () {
    return this.handlers
  }
}
