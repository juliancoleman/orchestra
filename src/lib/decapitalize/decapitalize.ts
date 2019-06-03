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
  const head : number = str.charCodeAt(0);
  const asciiz = 122;
  const decimal = 32;
  const isAlreadyCapitalized = String.fromCharCode(head) === String.fromCharCode(head | decimal);
  const isOutOfBounds = (head | decimal) > asciiz;

  if (!str) {
    return "";
  }

  if (isAlreadyCapitalized || isOutOfBounds) {
    return str;
  }

  return String.fromCharCode(head | decimal) + str.slice(1);
}
