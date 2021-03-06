import { escapeHTML } from "./escapeHTML";
import { escapeCharacters } from "../../helpers/escapeCharacters";

describe("#escapeHTML()", () => {
  it("converts special characters supplied by map", () => {
    for (const value in escapeCharacters) {
      expect(escapeHTML(value)).toBe(escapeCharacters[value]);
    }
  });

  it("returns null for bad inputs", () => {
    expect(escapeHTML("")).toBe(null);
  });
});
