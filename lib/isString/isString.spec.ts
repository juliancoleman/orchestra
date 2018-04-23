import { isString } from "./isString";

describe("#isString", () => {
  it("returns a boolean", () => {
    const result1 = isString(0);
    const result2 = isString(" ");

    expect(typeof result1).toBe("boolean");
    expect(result1).toBe(false);
    expect(typeof result2).toBe("boolean");
    expect(result2).toBe(true);
  });

  it("validates string literals", () => {
    const result = isString("");

    expect(result).toBe(true);
  });

  it("validates string constructors", () => {
    // tslint:disable-next-line
    const result1 = isString(new String(""));
    const result2 = isString(String(""));

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it("returns false when provided null", () => {
    // @ts-ignore
    const result = isString(null);

    expect(result).toBe(false);
  });
});
