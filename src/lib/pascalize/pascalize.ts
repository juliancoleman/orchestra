import { capitalize } from "../capitalize";

import { camscal } from "../../helpers";

/**
 * Pascalize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Converts a string to PascalCase._
 * @since v0.0.1
 */

export function pascalize(str: string): string {
  return capitalize(camscal(str));
}
