/**
 * applyHead
 *
 * @export
 * @param {*} str
 * @returns {string}
 *
 * @description _Returns a string with a function applied._
 * @since v0.0.1
 */

export function applyHead(val: string, fn: any): string {
  const head = val[0];
  const modifiedHead = fn.call(head);

  return head === modifiedHead
    ? val
    : modifiedHead + val.slice(1);
}
