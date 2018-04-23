/**
 * Clean
 *
 * _Returns a new string with trimmed left and right-hand
 * whitespace and repeating spaces and tabs replaced by a
 * single space._
 */

import whitespaces from "../../helpers/regex/whitespaces";

export const clean: (str: string) => string = str =>
  str.replace(whitespaces, " ").trim();
