import { capitalize } from "./capitalize";

describe("#capitalize", () => {
  describe("bad inputs", () => {
    it("fail", () => {
      // @ts-ignore
      const capitalizeBadFn1 = () => capitalize(0);
      // @ts-ignore
      const capitalizeBadFn2 = () => capitalize();
      class Other extends String { }
      const myOther = new Other("test");

      // @ts-ignore
      const capitalizeBadFn3 = () => capitalize(myOther);

      expect(capitalizeBadFn1).toThrow(TypeError);
      expect(capitalizeBadFn2).toThrow(TypeError);
      expect(capitalizeBadFn3).toThrow(TypeError);
    });
  });

  it("returns a string", () => {
    const result = capitalize("hello, world");

    expect(typeof result).toBe("string");
  });

  it("returns a string with the first character capitalized", () => {
    const result1 = capitalize("julian");
    const result2 = capitalize("Julian");

    expect(result1).toBe("Julian");
    expect(result2).toBe("Julian");
  })

  describe("the first character is not a letter", () => {
    it("returns the provided string, making no modifications", () => {
      const beginsWithPunctuation = capitalize(".string");
      const beginsWithNumber = capitalize("1string");

      expect(beginsWithPunctuation[0]).toBe(".");
      expect(beginsWithPunctuation).toBe(".string");
      expect(beginsWithNumber[0]).toBe("1");
      expect(beginsWithNumber).toBe("1string");
    });
  });

  it("is language-safe", () => {
    const russian = capitalize("б");
    const greek = capitalize("δ");
    // const turkish = capitalize("i");

    expect(russian).toBe("Б");
    expect(greek).toBe("Δ");
    // expect(turkish).toBe("İ");
  });
});
