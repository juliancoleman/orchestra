import { whitespaces } from "../../helpers/regex";
import { validate } from "../validate";

/**
 * Clean
 *
 * _Returns a new string with trimmed left and right-hand
 * whitespace and repeating spaces and tabs replaced by a
 * single space._
 */


function cleanFn(str: string): string {
  return str.replace(whitespaces, " ").trim();
}

export function clean(str: string): string {
  return validate(str, cleanFn);
}
