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
 * @description _Converts an HTML node to a safe string._
 * @since v0.0.1
 */

export function escapeHTML(node: DOMStringMap): string | null {
  const str = coerceString(node);

  if (!str) { return null; }

  return str.replace(escape, val => escapeCharacters[val]);
}
