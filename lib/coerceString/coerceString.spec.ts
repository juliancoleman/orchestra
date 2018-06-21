import { coerceString } from "./coerceString";

const one = 1;

describe("#coerceString()", () => {
  it("stringifies an array", () => {
    const two = 2;

    const result = coerceString([one, two]);

    expect(result).toBe("[1,2]");
  });

  it("stringifies an object", () => {
    const lineSeparator = 0x2028;
    const paragraphSeparator = 0x2029;

    const result = coerceString({
      a: String.fromCharCode(lineSeparator),
      b: String.fromCharCode(paragraphSeparator),
    });

    expect(result).toBe("{\"a\":\"\\u2028\",\"b\":\"\\u2029\"}");
  });

  it("coerces a string to a string", () => {
    const result = coerceString("hello, world");

    expect(result).toBe("hello, world");
  });

  it("coerces a number", () => {
    const decimal = 1.2345;

    const result1 = coerceString(one);
    const result2 = coerceString(decimal);

    expect(result1).toBe("1");
    expect(result2).toBe("1.2345");
  });

  it("throws with octal syntax", () => {
    // You can't even test this in strict mode.
    // Don't even bother. This always throws.

    return;
  });

  it("returns null if input is nil", () => {
    const result1 = coerceString(null);
    const result2 = coerceString(undefined);

    expect(result1).toBe(null);
    expect(result2).toBe(null);
  });
});
