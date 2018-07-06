import { unescapeHTML } from "./unescapeHTML";
import { htmlEntities } from "../../helpers/htmlEntities";

describe("#unescape()", () => {
  it("converts entities supplied by map", () => {
    for (const value in htmlEntities) {
      expect(unescapeHTML(value)).toBe(htmlEntities[value]);
    }
  });

  it("returns null for bad inputs", () => {
    expect(unescapeHTML("")).toBe(null);
  });

  it("converts entities not supplied by map", () => {
    expect(unescapeHTML("&#200;")).toBe("È");
  });
});
