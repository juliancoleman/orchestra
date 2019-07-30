/**
 * Decapitalize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Returns a new string with the first index
 * of a string transformed to lowercase. Compatible with
 * diacritics._
 * @since v0.0.1
 */

export function decapitalize(str: string): string {
  if (!str) {
    return "";
  }

  const head: number = str.charCodeAt(0);
  const ascii_z = 122; // tslint:disable-line: variable-name
  const decimal = 32;
  const shifted = head | decimal;
  const isAlreadyDecapitalized =
    String.fromCharCode(head) === String.fromCharCode(shifted);
  const isOutOfBounds = shifted > ascii_z;

  if (isAlreadyDecapitalized || isOutOfBounds) {
    return str;
  }

  return String.fromCharCode(shifted) + str.slice(1);
}
