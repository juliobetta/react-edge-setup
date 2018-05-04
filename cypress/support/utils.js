/**
 * Repeat a function a given number of times
 * @param  {Number}   times [description]
 * @param  {Function} func  [description]
 * @return {void}
 */
export function repeat(times, func) {
  return (new Array(3)).fill(null).forEach(func);
}
