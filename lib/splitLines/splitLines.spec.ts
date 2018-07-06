import { splitLines } from "./";

const two = 2;

describe("#splitLines()", () => {
  it("splits a string at each newline character", () => {
    const str: string = "Hello\nWorld";
    const result: string[] = splitLines(str);

    expect(result).toHaveLength(two);
    expect(result[0]).toBe("Hello");
    expect(result[1]).toBe("World");
  });

  it("trims leading and trailing whitespace from a string", () => {
    const str: string = "     string\n       ";
    const result: string[] = splitLines(str);

    expect(result[0]).toBe("string");
    expect(result[1]).toBe("");
  });

  it("removes repeated spaces between words", () => {
    const str: string = "    hello    \n  world  ";
    const result: string[] = splitLines(str);

    expect(result[0]).toBe("hello");
    expect(result[1]).toBe("world");
  });
});
