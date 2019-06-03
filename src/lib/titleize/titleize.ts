import { capitalize } from "../capitalize";

/**
 * Titleize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Returns a new string with the first letter
 * of each word capitalized. Compatible with
 * diacritics._
 * @since v0.0.1
 */

export function titleize(str: string): string {
  return str
    .split(" ")
    .map(capitalize)
    .join(" ");
}
