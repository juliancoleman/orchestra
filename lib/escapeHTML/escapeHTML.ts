// tslint:disable max-line-length

import { coerceString } from "../";
import { escapeCharacters } from "../../helpers/escapeCharacters";
import { escape } from "../../helpers/regex";

/**
 * escapeHTML
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Converts HTML special characters to their entity equivalents. Cannot convert nodes returned by `querySelector`._
 * @since v0.0.1
 */

export function escapeHTML(node: string): string | null {
  const str = coerceString(node);

  if (!str) { return null; }

  return str.replace(escape, val => escapeCharacters[val]);
}
