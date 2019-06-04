import { snakeize } from "./snakeize";

const mozTransform = "moz_transform";

describe("#snakeize()", () => {
  it("returns a string", () => {
    const result = snakeize("-moz-transform");

    expect(typeof result).toBe("string");
  });

  it("converts lowercase", () => {
    const result = snakeize("moz transform");

    expect(result).toBe(mozTransform);
  });

  it("converts uppercase", () => {
    const result = snakeize("MOZ TRANSFORM");

    expect(result).toBe(mozTransform);
  });

  it("converts camelCase", () => {
    // This test is dumb, I know.
    const result = snakeize("mozTransform");

    expect(result).toBe(mozTransform);
  });
  it("converts snake_case", () => {
    const result = snakeize("moz_transform");

    expect(result).toBe(mozTransform);
  });
  it("converts PascalCase", () => {
    const result = snakeize("MozTransform");

    expect(result).toBe(mozTransform);
  });
  it("converts kebab-case", () => {
    const result = snakeize("moz-transform");

    expect(result).toBe(mozTransform);
  });
  it("converts Title Case", () => {
    const result = snakeize("Moz Transform");

    expect(result).toBe(mozTransform);
  });
  it("removes leading and trailing hyphens", () => {
    const result = snakeize("-moz-transform");

    expect(result).toBe(mozTransform);
  });
  it("also removes leading and trailing non-alphanumeric characters", () => {
    const result = snakeize("-_.*moz transform*._-");

    expect(result).toBe(mozTransform);
    // I'm so tired of writing this.
  });
  it("deals with numbers quite nicely", () => {
    const result1 = snakeize("1thing2say3words");
    const result2 = snakeize("iss2houston"); // It's technically 3 words.
    const result3 = snakeize("abc123");

    expect(result1).toBe("1_thing_2_say_3_words");
    expect(result2).toBe("iss_2_houston");

    // This expectation shouldn't be different from the
    // input since there's no non-alphabetic character
    // preceeding an alphabetic character.
    expect(result3).toBe(result3);
  });
});
