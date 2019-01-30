import { applyHead } from "../../helpers/applyHead";

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
  return applyHead(str, String.prototype.toUpperCase);
}
