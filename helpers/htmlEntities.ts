/**
 * HTML Entities
 *
 * @export
 * @type {Object}
 *
 * @description _Maps escaped entities to their HTML variations._
 * @see https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet
 * @since v0.0.1
 */

export const htmlEntities: any = {
  "&nbsp;": " ",
  "&cent;": "¢",
  "&pound;": "£",
  "&yen;": "¥",
  "&euro;": "€",
  "&copy;": "©",
  "&reg;": "®",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": "\"",
  "&amp;": "&",
  "&#x27;": "'",
  "&#x2F;": "/",
  "&#x2f;": "/",
};
