/**
 * firstCharInSentenceIsLower
 *
 * @export
 * @type {RegExp}
 *
 * @description _Matches the first letter following a punctuation mark if that letter is lowercase._
 * @since v0.0.1
 */

export const firstCharInSentenceIsLower: RegExp = /(^|[.!?]\s+)([a-z])/g;
