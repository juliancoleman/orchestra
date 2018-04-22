/**
 * Decapitalize
 *
 * _Returns a new string with the first index of a string
 * transformed to lowercase._
 */

const decapitalize: Function = (str: string) =>
  str[0].toLowerCase() + str.slice(1);

export default decapitalize;
