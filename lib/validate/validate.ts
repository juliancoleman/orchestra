import { OrchestraTypeError, OrchestraReferenceError } from "../../helpers/errors";
import { isString } from "../isString";

/**
 * Validate
 *
 * _Accepts an argument and a callback. If the argument is
 * a string, the callback is fired, otherwise an
 * `OrchestraTypeError` is thrown_
 */


export function validate(value: string, callback: (str: string) => string): string {
  if (value === undefined || value === null) {
    throw new OrchestraReferenceError("No value provided to orchestra.validate()");
  }

  if (!isString(value)) {
    throw new OrchestraTypeError(typeof value);
  }

  if (typeof callback !== "function") {
    throw new OrchestraReferenceError("No callback provided to orchestra.validate()");
  }

  return callback(value);
}
