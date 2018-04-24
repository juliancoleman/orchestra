/**
 * Capitalize
 *
 * @export
 * @param {tring} str
 * @returns {string}
 *
 * @description _Returns a new string with the first index of a string transformed to Uppercase._
 * @since v0.0.1
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
  const head = str[0];
  const capitalizedHead = head.toUpperCase();

  return head === capitalizedHead
    ? str
    : capitalizedHead + str.slice(1);
}
