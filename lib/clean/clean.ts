/**
 * Clean
 *
 * _Returns a new string with trimmed left and right-hand
 * whitespace and repeating spaces and tabs replaced by a
 * single space._
 */

import whitespaces from "../helpers/regex/whitespaces";

const clean: Function = (str: string) =>
  str.replace(whitespaces, " ").trim();

export default clean;
