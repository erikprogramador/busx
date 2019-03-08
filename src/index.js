/**
 * @class Busx
 * @author Erik Vanderlei Fernandes <erik.vanderlei.programador@outlook.com>
 * @version 0.1.0
 */
class Busx {
  constructor() {
    this.handlers = []
  }

  /**
   * Listen for events
   *
   * @param {any} key
   * @param {any} handler
   * @memberof Busx
   */
  listen(key, handler) {
    this.handlers.push({
      key,
      handler
    })
  }

  /**
   * Fire the handlers for the event
   *
   * @param {any} key
   * @param {any} [data={}]
   * @memberof Busx
   */
  fire(key, data = {}) {
    this.handlers
      .filter(handler => handler.key === key)
      .forEach(handler => handler.handler(data))
  }

  /**
   * Return a list with all registered events
   *
   * @returns
   * @memberof Busx
   */
  all() {
    return this.handlers
  }
}

module.exports = Busx
