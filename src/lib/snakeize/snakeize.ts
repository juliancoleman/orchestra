import { snabab } from "../../helpers";

/**
 * Snakeize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Converts a string to snake_case._
 * @since v0.0.1
 */

export function snakeize(str: string): string {
  return snabab(str).join("_");
}
