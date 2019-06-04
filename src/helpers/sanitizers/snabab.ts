import { pascalize } from "../../lib";

/**
 * Snabab
 *
 * @export
 *
 * @description _Sanitizes inputs for snakeize and kebabize._
 * @since v0.0.1
 */

export function snabab(str: string): string[] {
  const positiveLookaheadCapitalLetter = new RegExp(/(?=[A-Z\d])/g);

  return pascalize(str)
    .split(positiveLookaheadCapitalLetter)
    .map(word => word.toLowerCase());
}
