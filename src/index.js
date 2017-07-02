module.exports = class Commander {
  constructor () {
    this.handlers = {}
  }

  listen (key, handler) {
    this.handlers[key] = handler
  }

  fire (key, data = {}) {
    this.handlers[key](data)
  }

  all () {
    return this.handlers
  }
}
