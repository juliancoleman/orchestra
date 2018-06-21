// tslint:disable max-line-length

/**
 * coerceString
 *
 * @export
 * @param {any} value
 * @returns {string}
 *
 * @description _Attempts to coerce a not-nil value to a string. Cannot coerce Octals, Map, or Set._
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Issue_with_plain_JSON.stringify_for_use_as_JavaScript
 * @since v0.0.1
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
