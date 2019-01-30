import { applyHead } from "../../helpers/applyHead";

/**
 * Decapitalize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Returns a new string with the first index of a string transformed to lowercase._
 * @since v0.0.1
 */

export function decapitalize(str: string): string {
  return applyHead(str, String.prototype.toLowerCase);
}
