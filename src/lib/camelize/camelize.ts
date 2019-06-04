import { decapitalize } from "../decapitalize";

import { camscal } from "../../helpers";

/**
 * Camelize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Converts a string to camelCase._
 * @since v0.0.1
 */

export function camelize(str: string): string {
  return decapitalize(camscal(str));
}
