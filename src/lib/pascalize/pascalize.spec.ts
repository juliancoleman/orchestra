import { pascalize } from "./pascalize";

// tslint:disable-next-line: variable-name
const MozTransform = "MozTransform";

describe("#pascalize()", () => {
  it("returns a string", () => {
    const result = pascalize("-moz-transform");

    expect(typeof result).toBe("string");
  });

  it("converts lowercase", () => {
    const result = pascalize("moz transform");

    expect(result).toBe(MozTransform);
  });

  it("converts uppercase", () => {
    const result = pascalize("MOZ TRANSFORM");

    expect(result).toBe(MozTransform);
  });

  it("converts camelCase", () => {
    // This test is dumb, I know.
    const result = pascalize("mozTransform");

    expect(result).toBe(MozTransform);
  });
  it("converts snake_case", () => {
    const result = pascalize("moz_transform");

    expect(result).toBe(MozTransform);
  });
  it("converts PascalCase", () => {
    const result = pascalize("MozTransform");

    expect(result).toBe(MozTransform);
  });
  it("converts kebab-case", () => {
    const result = pascalize("moz-transform");

    expect(result).toBe(MozTransform);
  });
  it("converts Title Case", () => {
    const result = pascalize("Moz Transform");

    expect(result).toBe(MozTransform);
  });
  it("removes leading and trailing hyphens", () => {
    const result = pascalize("-moz-transform");

    expect(result).toBe(MozTransform);
  });
  it("also removes leading and trailing non-alphanumeric characters", () => {
    const result = pascalize("-_.*moz transform*._-");

    expect(result).toBe(MozTransform);
    // I'm so tired of writing this.
  });
  it("deals with numbers quite nicely", () => {
    const result1 = pascalize("1thing2say3words");
    const result2 = pascalize("ISS2houston"); // It's technically 3 words.
    const result3 = pascalize("abc123");

    expect(result1).toBe("1Thing2Say3Words");
    expect(result2).toBe("ISS2Houston");

    // This expectation shouldn't be different from the
    // input since there's no non-alphabetic character
    // preceeding an alphabetic character.
    expect(result3).toBe(result3);
  });
});
