import { clean } from "./clean";

const expectedResult = "hello, world";

describe("#clean()", () => {
  it("returns a string", () => {
    const result = clean("hello, world");

    expect(typeof result).toBe("string");
  });

  it("properly handles single and repeated whitespace characters", () => {
    const space = clean("hello, world");
    const repeatedSpace = clean("hello,  world");
    const tab = clean("hello,\tworld");
    const repeatedTab = clean("hello,\t\tworld");
    const newline = clean("hello,\nworld");
    const repeatedNewline = clean("hello,\n\nworld");
    const carriageReturn = clean("hello,\rworld");
    const repeatedCarriageReturn = clean("hello,\r\rworld");
    const mixedWhitespace = clean("hello, \t\n\rworld");

    expect(space).toBe(expectedResult);
    expect(repeatedSpace).toBe(expectedResult);
    expect(tab).toBe(expectedResult);
    expect(repeatedTab).toBe(expectedResult);
    expect(newline).toBe(expectedResult);
    expect(repeatedNewline).toBe(expectedResult);
    expect(carriageReturn).toBe(expectedResult);
    expect(repeatedCarriageReturn).toBe(expectedResult);
    expect(mixedWhitespace).toBe(expectedResult);
  });

  it("properly trims leading and trailing whitespace", () => {
    const leading = clean(" hello, world");
    const trailing = clean("hello, world ");

    expect(leading).toBe(expectedResult);
    expect(trailing).toBe(expectedResult);
  });
});
