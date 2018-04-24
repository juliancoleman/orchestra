import { coerceString } from "./coerceString";

describe("#coerceString", () => {
  it("coerces an array to a string", () => {
    const result = coerceString([1, 2]);

    expect(result).toBe("[1,2]");
  });

  it("gracefully coerces an object to a string", () => {
    const result = coerceString({
      a: String.fromCharCode(0x2028),
      b: String.fromCharCode(0x2029),
    });

    expect(result).toBe("{\"a\":\"\\u2028\",\"b\":\"\\u2029\"}");
  });

  it("coerces a string to a string", () => {
    const result = coerceString("hello, world");

    expect(result).toBe("hello, world");
  });

  it("coerces a number", () => {
    const result1 = coerceString(1);
    const result2 = coerceString(1.2345);

    expect(result1).toBe("1");
    expect(result2).toBe("1.2345");
  });

  it("throws with octal syntax", () => {
    // You can't even test this in strict mode.
    // Don't even bother. This always throws.
  });

  it("returns null if input is nil", () => {
    const result1 = coerceString(null);
    const result2 = coerceString(undefined);

    expect(result1).toBe(null);
    expect(result2).toBe(null);
  });
});
