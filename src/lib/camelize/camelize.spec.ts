import { camelize } from "./camelize";

const mozTransform = "mozTransform";

describe("#camelize()", () => {
  it("returns a string", () => {
    const result = camelize("-moz-transform");

    expect(typeof result).toBe("string");
  });

  it("converts lowercase", () => {
    const result = camelize("moz transform");

    expect(result).toBe(mozTransform);
  });

  it("converts uppercase", () => {
    const result = camelize("MOZ TRANSFORM");

    expect(result).toBe(mozTransform);
  });

  it("converts camelCase", () => {
    // This test is dumb, I know.
    const result = camelize("mozTransform");

    expect(result).toBe(mozTransform);
  });
  it("converts snake_case", () => {
    const result = camelize("moz_transform");

    expect(result).toBe(mozTransform);
  });
  it("converts PascalCase", () => {
    const result = camelize("MozTransform");

    expect(result).toBe(mozTransform);
  });
  it("converts kebab-case", () => {
    const result = camelize("moz-transform");

    expect(result).toBe(mozTransform);
  });
  it("converts Title Case", () => {
    const result = camelize("Moz Transform");

    expect(result).toBe(mozTransform);
  });
  it("removes leading and trailing hyphens", () => {
    const result = camelize("-moz-transform");

    expect(result).toBe(mozTransform);
  });
  it("also removes leading and trailing non-alphanumeric characters", () => {
    const result = camelize("-_.*moz transform*._-");

    expect(result).toBe(mozTransform);
    // I'm so tired of writing this.
  });
  it("deals with numbers quite nicely", () => {
    const result1 = camelize("1thing2say3words");
    const result2 = camelize("ISS2houston"); // It's technically 3 words.
    const result3 = camelize("abc123");

    expect(result1).toBe("1Thing2Say3Words");
    expect(result2).toBe("iSS2Houston");

    // This expectation shouldn't be different from the
    // input since there's no non-alphabetic character
    // preceeding an alphabetic character.
    expect(result3).toBe(result3);
  });
});
