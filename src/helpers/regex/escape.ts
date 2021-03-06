/**
 * Escape Characters
 *
 * @export
 * @type {RegExp}
 *
 * @description _Matches all HTML entities to be escaped in a string._
 * @since v0.0.1
 */

export const escape: RegExp = /[¢£¥€©®<>"&'\/]/g;
