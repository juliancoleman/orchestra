/**
 * Capitalize
 * @param {string} str
 * @returns {string}
 *
 * _Returns a new string with the first index of a string
 * transformed to Uppercase._
 */

// export function capitalizeByLocale(locale: string): (str: string) => string {
//   return function(str: string): string {
//     const head = str[0];
//     const capitalizedHead = head.toLocaleUpperCase(locale);

//     return head === capitalizedHead
//       ? str
//       : capitalizedHead + str.slice(1);
//   };
// }


export function capitalize(str: string): string {
  return str[0] === str[0].toUpperCase()
    ? str
    : str[0].toUpperCase() + str.slice(1);
}
