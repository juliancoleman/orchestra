/**
 * Escape Characters
 *
 * @export
 * @type {Object}
 *
 * @description _Maps HTML entities to their escaped variations._
 * @see https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet
 * @since v0.0.1
 */

export const escapeCharacters: any = {
  "¢": "&cent;",
  "£": "&pound;",
  "¥": "&yen;",
  "€": "&euro;",
  "©": "&copy;",
  "®": "&reg;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "&": "&amp;",
  "'": "&#x27;",
  "/": "&#x2F;",
};
