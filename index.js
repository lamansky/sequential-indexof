'use strict'

/**
 * Creates an indexOf function for a given array or string. Every time you call
 * the produced function with same value, it will return the index of the next
 * instance of that value.
 * @param  {array|string} thing The array or string in which you will be
 *   searching.
 * @return {function}
 */
module.exports = function sequentialIndexOf (thing) {
  const lastIndices = new Map()

  /**
   * Every time this function is called with a given value, it will return the
   * index of the next instance of that value.
   * @param  {any} value The value whose index you want to find.
   * @return {int} The index of the next instance, or -1 if there are no more
   *   instances.
   */
  return function indexOf (value) {
    const lastIndex = lastIndices.has(value) ? lastIndices.get(value) : -1
    const index = thing.indexOf(value, lastIndex + 1)
    if (index !== -1) lastIndices.set(value, index)
    return index
  }
}
