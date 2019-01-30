import { clean } from "../";

/**
 * splitLines
 *
 * @export
 * @param {string} node
 * @returns {string}
 *
 * @description _Splits a string to an array at each newline character._
 * @since v0.0.1
 */

export function splitLines(str: string): string[] {
  return str
    .split("\n")
    .map(clean);
}
