/**
 * HTML Entity Number
 *
 * @export
 * @type {RegExp}
 *
 * @description _Matches HTML entities by their number._
 * @since v0.0.1
 */

export const entityNumber: RegExp = /^#x([\da-fA-F]+)$/;
