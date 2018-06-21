import { decapitalize } from "./decapitalize";

describe("#decapitalize()", () => {
  it("returns a string", () => {
    const result = decapitalize("Hello, world");

    expect(typeof result).toBe("string");
  });

  it("returns a string with the first letter lowercased", () => {
    const result1 = decapitalize("Test");
    const result2 = decapitalize("test");

    expect(result1).toBe("test");
    expect(result2).toBe("test");
  });

  describe("the first character is not a letter", () => {
    it("returns the provided string, making no modifications", () => {
      const beginsWithPunctuation = decapitalize(".string");
      const beginsWithNumber = decapitalize("1string");

      expect(beginsWithPunctuation.startsWith(".")).toBe(true);
      expect(beginsWithPunctuation).toBe(".string");
      expect(beginsWithNumber.startsWith("1")).toBe(true);
      expect(beginsWithNumber).toBe("1string");
    });
  });
});
