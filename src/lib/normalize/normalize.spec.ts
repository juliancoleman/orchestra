import { normalize } from ".";

describe("#normalize()", () => {
  it("returns a string", () => {
    const result = normalize("hElLo WoRlD");

    expect(typeof result).toBe("string");
  });

  it("normalizes a string", () => {
    const result = normalize(
      "_-this String is NORMALIZED. and this sentence is capitalized",
    );

    expect(result).toBe(
      "This string is normalized. And this sentence is capitalized",
    );
  });
});
