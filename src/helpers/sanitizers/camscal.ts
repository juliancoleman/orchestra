import { capitalize } from "../../lib";

/**
 * Camscal
 *
 * @export
 *
 * @description _Sanitizes inputs for camelize and pascalize._
 * @since v0.0.1
 */

// The complexity of this function sucks. Clean it up, Julian.
export function camscal(str: string): string {
  // Matches these bois, including whitespaces -> `~!@#$%^&*()_+-=[]\{}|;':",./<>?
  const rejections = new RegExp(/[\s\W_]+/g);
  const numberPreceedingLetter = new RegExp(/((?<=\d)[a-z])/g);
  const isNotEmpty = (n: string) => n.length;
  const cleanedInput = str.split(rejections).filter(isNotEmpty); // no need to clean

  // Greedily exit if the cleanedInput is empty
  if (!cleanedInput.length) {
    return "";
  }

  // We can say that the string is already camelCased if
  // the length of the array is 1. Getting by the first
  // index is faster than #join().
  if (cleanedInput.length === 1) {
    return cleanedInput[0].replace(numberPreceedingLetter, match =>
      match.toUpperCase(),
    );
  }

  const result = cleanedInput
    .map(word => capitalize(word, true))
    .join("")
    .replace(numberPreceedingLetter, match => match.toUpperCase());

  return result;
}
