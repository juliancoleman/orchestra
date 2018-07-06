/**
 * HTML Entities
 *
 * @export
 * @type {RegExp}
 *
 * @description _Matches all escaped HTML entities in a string._
 * @since v0.0.1
 */

export const entity: RegExp = /\&([^;]+);/g;
