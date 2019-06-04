import { snabab } from "../../helpers";

/**
 * Kebabize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Converts a string to kebab-case._
 * @since v0.0.1
 */

export function kebabize(str: string): string {
  return snabab(str).join("-");
}
