// tslint:disable max-line-length
import { htmlEntities } from "../../helpers/htmlEntities";
import { mapReplace } from "../../helpers/mapReplace";
import { entity, entityCode, entityNumber } from "../../helpers/regex";

/**
 * unescapeHTML
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @description _Converts HTML entities to their special character equivalents. Cannot convert nodes returned by `querySelector`._
 * @since v0.0.1
 */

export function unescapeHTML(str: string): string | null {
  const replaceFn = (val: string, entity: any) => {
    let match: string;

    if (val in htmlEntities) {
      return htmlEntities[val];
    }

    if (match = entity.match(entityNumber)) {
      return String.fromCodePoint(parseInt(match[1], 16));
    }

    if (match = entity.match(entityCode)) {
      return String.fromCodePoint(~~match[1]);
    }

    return val;
  };

  return mapReplace(str, entity, replaceFn);
}
