/**
 * Capitalize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Returns a new string with the first index
 * of a string transformed to Uppercase. Compatible with
 * diacritics._
 * @since v0.0.1
 */

export function capitalize(str: string): string {
  const head: number = str.charCodeAt(0);
  const asciiA = 65;
  const decimal = 223;
  const shifted = head & decimal;
  const isAlreadyCapitalized =
    String.fromCharCode(head) === String.fromCharCode(shifted);
  const isOutOfBounds = shifted < asciiA;

  if (!str) {
    return "";
  }

  if (isAlreadyCapitalized || isOutOfBounds) {
    return str;
  }

  return String.fromCharCode(shifted) + str.slice(1);
}
