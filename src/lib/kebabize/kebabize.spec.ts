import { kebabize } from "./kebabize";

const mozTransform = "moz-transform";

describe("#kebabize()", () => {
  it("returns a string", () => {
    const result = kebabize("-moz-transform");

    expect(typeof result).toBe("string");
  });

  it("converts lowercase", () => {
    const result = kebabize("moz transform");

    expect(result).toBe(mozTransform);
  });

  it("converts uppercase", () => {
    const result = kebabize("MOZ TRANSFORM");

    expect(result).toBe(mozTransform);
  });

  it("converts camelCase", () => {
    // This test is dumb, I know.
    const result = kebabize("mozTransform");

    expect(result).toBe(mozTransform);
  });
  it("converts snake_case", () => {
    const result = kebabize("moz_transform");

    expect(result).toBe(mozTransform);
  });
  it("converts PascalCase", () => {
    const result = kebabize("MozTransform");

    expect(result).toBe(mozTransform);
  });
  it("converts kebab-case", () => {
    const result = kebabize("moz-transform");

    expect(result).toBe(mozTransform);
  });
  it("converts Title Case", () => {
    const result = kebabize("Moz Transform");

    expect(result).toBe(mozTransform);
  });
  it("removes leading and trailing hyphens", () => {
    const result = kebabize("-moz-transform");

    expect(result).toBe(mozTransform);
  });
  it("also removes leading and trailing non-alphanumeric characters", () => {
    const result = kebabize("-_.*moz transform*._-");

    expect(result).toBe(mozTransform);
    // I'm so tired of writing this.
  });
  it("deals with numbers quite nicely", () => {
    const result1 = kebabize("1thing2say3words");
    const result2 = kebabize("iss2houston"); // It's technically 3 words.
    const result3 = kebabize("abc123");

    expect(result1).toBe("1-thing-2-say-3-words");
    expect(result2).toBe("iss-2-houston");

    // This expectation shouldn't be different from the
    // input since there's no non-alphabetic character
    // preceeding an alphabetic character.
    expect(result3).toBe(result3);
  });
});
