import { reverse } from "./reverse";

describe("#reverse()", () => {
  it("returns a string", () => {
    const result = reverse("hello, world");

    expect(typeof result).toBe("string");
  });
  it("reverses a string", () => {
    const result = reverse("hello, world");

    expect(result).toBe("dlrow ,olleh");
  });
});
