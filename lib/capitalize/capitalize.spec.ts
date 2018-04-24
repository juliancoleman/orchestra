import { capitalize } from "./capitalize";

describe("#capitalize", () => {
  it("returns a string", () => {
    const result = capitalize("hello, world");

    expect(typeof result).toBe("string");
  });

  it("returns a string with the first character capitalized", () => {
    const result1 = capitalize("julian");
    const result2 = capitalize("Julian");

    expect(result1).toBe("Julian");
    expect(result2).toBe("Julian");
  });

  describe("the first character is not a letter", () => {
    it("returns the provided string, making no modifications", () => {
      const beginsWithPunctuation = capitalize(".string");
      const beginsWithNumber = capitalize("1string");

      expect(beginsWithPunctuation.startsWith(".")).toBe(true);
      expect(beginsWithPunctuation).toBe(".string");
      expect(beginsWithNumber.startsWith("1")).toBe(true);
      expect(beginsWithNumber).toBe("1string");
    });
  });

  it("is language-safe (mostly)", () => {
    const russian = capitalize("б");
    const greek = capitalize("δ");
    // const turkish = capitalize("i");

    expect(russian).toBe("Б");
    expect(greek).toBe("Δ");
    // expect(turkish).toBe("İ");
  });
});
