import { titleize } from "./titleize";

describe("#titleize()", () => {
  it("returns a string", () => {
    const result = titleize("hello, world");

    expect(typeof result).toBe("string");
  });

  it("returns a string with the first letter of each word capitalized", () => {
    const result1 = titleize("test");
    const result2 = titleize("hello, world");

    expect(result1).toBe("Test");
    expect(result2).toBe("Hello, World");
  });
});
