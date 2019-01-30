import { unescapeHTML } from "./unescapeHTML";
import { htmlEntities } from "../../helpers/htmlEntities";

describe("#unescapeHTML()", () => {
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
    expect(unescapeHTML("&#x000B1;")).toBe("±");
    expect(unescapeHTML("&12345;")).toBe("&12345;");
  });
});
