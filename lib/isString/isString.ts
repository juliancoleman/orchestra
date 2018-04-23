/**
 * isString
 *
 * _Returns a boolean if the argument is a string._
 */

type notNil = number | string | object | boolean | symbol;

export function isString(value: notNil): boolean {
  return value !== null && value.constructor === String || value instanceof String;
}
