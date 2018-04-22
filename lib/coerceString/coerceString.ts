/**
 * coerceString
 *
 * _Attempts to coerce a value to a string, ignoring `null`
 * or `undefined` inputs. Any number beginning with `0`
 * that isn't followed by an `8` or a `9` will throw a
 * `SyntaxError: Unexpected number`._
 */

const coerceString: Function = (any: any) => {
  if (!any) { return null; }

  return String(any);
};

export default coerceString;
