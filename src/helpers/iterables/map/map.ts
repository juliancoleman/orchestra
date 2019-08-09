// tslint:disable max-line-length

/**
 * Map
 *
 * @export
 *
 * @description _Creates a new string with the results of calling a provided function on ever character in the calling string._
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @since v0.2.0
 */

export function map<T extends Function>(str: string, fn: T): string {
  const iter = str[Symbol.iterator]();

  let result: string = "";

  for (const char of iter) {
    result += fn(char);
  }

  return result;
}
