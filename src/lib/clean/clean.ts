import { whitespaces } from "../../helpers/regex";

/**
 * Clean
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Returns a new trimed string with internal whitespace replaced by a single space._
 * @since v0.0.1
 */

export function clean(str: string): string {
  return str.replace(whitespaces, " ").trim();
}
