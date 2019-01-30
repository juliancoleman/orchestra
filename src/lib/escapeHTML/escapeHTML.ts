// tslint:disable max-line-length
import { escapeCharacters } from "../../helpers/escapeCharacters";
import { mapReplace } from "../../helpers/mapReplace";
import { escape } from "../../helpers/regex";

/**
 * escapeHTML
 *
 * @export
 * @param {string} node
 * @returns {string}
 *
 * @description _Converts HTML special characters to their entity equivalents. Cannot convert nodes returned by `querySelector`._
 * @since v0.0.1
 */

export function escapeHTML(node: string): string | null {
  const replaceFn = (val: string) => escapeCharacters[val];

  return mapReplace(node, escape, replaceFn);
}
