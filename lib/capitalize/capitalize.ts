
/**
 * Capitalize
 *
 * _Returns a new string with the first index of a string
 * transformed to Uppercase._
 */


export function capitalize(str: string): string {
  return str[0] === str[0].toUpperCase()
    ? str
    : str[0].toUpperCase() + str.slice(1);
}
