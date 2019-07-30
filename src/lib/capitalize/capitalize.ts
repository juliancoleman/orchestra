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

export function capitalize(str: string, restLower?: boolean): string {
  if (!str) {
    return "";
  }

  const head: number = str.charCodeAt(0);
  const ascii_A = 65; // tslint:disable-line: variable-name
  const decimal = 223;
  const shifted = head & decimal;
  const isAlreadyCapitalized =
    String.fromCharCode(head) === String.fromCharCode(shifted);
  const isOutOfBounds = shifted < ascii_A;

  if ((isAlreadyCapitalized && !restLower) || isOutOfBounds) {
    return str;
  }

  if (restLower) {
    return String.fromCharCode(shifted) + str.slice(1).toLowerCase();
  }

  return String.fromCharCode(shifted) + str.slice(1);
}
