/**
 * Reverse
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Reverses the input string._
 * @since v0.1.1
 */

export function reverse(str: string): string {
  const { length } = str;
  let result = "";

  for (let i = length - 1; i >= 0; i -= 1) {
    result += str[i];
  }

  return result;
}
