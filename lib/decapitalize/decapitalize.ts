/**
 * Decapitalize
 *
 * @param {string} str
 * @returns {string}
 *
 * _Returns a new string with the first index of a string
 * transformed to lowercase._
 */


export function decapitalize(str: string): string {
  const head = str[0];
  const lowercaseHead = head.toLowerCase();

  return head === lowercaseHead
    ? str
    : lowercaseHead + str.slice(1);
}
