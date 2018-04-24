import { validate } from "./validate";
import { OrchestraTypeError, OrchestraReferenceError } from "../../helpers/errors";

describe("#validate", () => {
  describe("throws when", () => {
    it("value is not a string", () => {
      // @ts-ignore
      const validateBadFn = () => validate(1, () => { });

      expect(validateBadFn).toThrow(OrchestraTypeError);
    });

    it("a callback is not provided", () => {
      // @ts-ignore
      const validateBadFn = () => validate("");

      expect(validateBadFn).toThrow(OrchestraReferenceError);
    });

    it("a value is not provided", () => {
      // @ts-ignore
      const validateBadFn = () => validate();

      expect(validateBadFn).toThrow(OrchestraReferenceError);
    });
  });

  it("returns a callback with the provided value", () => {
    const toUpper = (value: string) => value.toUpperCase();
    const result = validate("hello", toUpper);

    expect(result).toBe("HELLO");
  });
});
