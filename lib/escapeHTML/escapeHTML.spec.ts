import { escapeHTML } from "./escapeHTML";
import { escapeCharacters } from "../../helpers/escapeCharacters";

describe("#escape()", () => {
  it("converts special characters supplied by map", () => {
    for (const value of Object.keys(escapeCharacters)) {
      expect(escapeHTML(value)).toBe(escapeCharacters[value]);
    }
  });
});
