/**
 * splitLines
 *
 * _Returns a new array of strings split at the newline
 * (`\n`) character._
 */

import clean from "./clean";

const splitLines: Function = (str: string) =>
  str.split("\n").map(clean);

export default splitLines;
