/**
 * coerceString
 *
 * @param {any} value
 *
 * _Attempts to coerce a value to a string, ignoring `null`
 * or `undefined` inputs. Octal syntax will throw a
 * `SyntaxError: Invalid number`. Cannot coerce Map or Set._
 */


export function coerceString<T>(value: T): string | null {
  if (value === null || value === undefined) {
    return null;
  }

  if (Array.isArray(value) || value === Object(value)) {
    return JSON.stringify(value)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
  }

  return String(value);
}
