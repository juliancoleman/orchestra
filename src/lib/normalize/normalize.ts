import { capitalize, clean } from "../";

/**
 * Normalize
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Normalizes a string to be human readable (not 100% accurate)._
 */

export function normalize(str: string): string {
  const sentenceEndingPunctuation = new RegExp(/(?<=[.?!]\s)[a-z]/g);
  const danglers = new RegExp(/[_-]/g);

  return capitalize(clean(str.replace(danglers, " ")).toLowerCase()).replace(
    sentenceEndingPunctuation,
    match => match.toUpperCase(),
  );
}
