// tslint:disable max-line-length

import { coerceString } from "../lib";

/**
 * mapReplace
 *
 * @export
 * @param {*} str
 * @returns {string}
 *
 * @description _Returns a string with a pattern replaced with its mapped equivalent._
 * @since v0.0.1
 */

export function mapReplace(str: string, matcher: RegExp, fn: (substring: string, ...args: any[]) => string): string | null {
  const node = coerceString(str);

  if (!node) { return null; }

  return node.replace(matcher, fn);
}
