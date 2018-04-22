/**
 * Capitalize
 *
 * _Returns a new string with the first index of a string
 * transformed to Uppercase._
 */

const capitalize: Function = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export default capitalize;
