import { whitespaces } from "../../helpers/regex";

/**
 * Clean
 * @param {string} str
 * @returns {string}
 *
 * _Returns a new string with trimmed left and right-hand
 * whitespace and repeating spaces and tabs replaced by a
 * single space._
 */


export function clean(str: string): string {
  return str.replace(whitespaces, " ").trim();
}
