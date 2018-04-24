import { capitalize } from "./capitalize";
import { OrchestraTypeError, OrchestraReferenceError } from "../../helpers/errors";

describe("#capitalize", () => {
  it("properly implements Orchestra#validate", () => {
    // @ts-ignore
    const capitalizeBadFn1 = () => capitalize(0);
    // @ts-ignore
    const capitalizeBadFn2 = () => capitalize();

    expect(capitalizeBadFn1).toThrow(OrchestraTypeError);
    expect(capitalizeBadFn2).toThrow(OrchestraReferenceError);
  });

  it("handles extended types properly", () => {
    class Other extends String { }
    const myOther = new Other("test");
    // @ts-ignore
    const result = capitalize(myOther);

    expect(result).toBe("Test");
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
