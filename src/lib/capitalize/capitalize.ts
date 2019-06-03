/**
 * Capitalize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Returns a new string with the first index of a string transformed to Uppercase._
 * @since v0.0.1
 */

export function capitalize(str: string): string {
  const head : number = str.charCodeAt(0);
  const asciiA = 65;
  const decimal = 223;
  const isAlreadyCapitalized = String.fromCharCode(head) === String.fromCharCode(head & decimal);
  const isOutOfBounds = (head & decimal) < asciiA;

  if (!str) {
    return "";
  }

  if (isAlreadyCapitalized || isOutOfBounds) {
    return str;
  }

  return String.fromCharCode(head & decimal) + str.slice(1);
}
