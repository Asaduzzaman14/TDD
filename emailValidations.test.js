import { describe, expect, it } from "vitest";
import { validateEmail } from "./emailValidations";

describe("validateEmail", () => {
  it("should validate a correct email address ", () => {
    const email = "example@gmail.com";

    const resultFn = () => validateEmail(email);
    expect(resultFn).not.toThrow();
  });

  it("should throw an error if invalid email address provide ", () => {
    const email = "example";

    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it("should throw an error if an empty string passed ", () => {
    const email = "";

    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it("should throw an error for a null email address", () => {
    const email = null;

    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it("should throw an error for a undefind email address", () => {
    const email = undefined;

    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });
});
