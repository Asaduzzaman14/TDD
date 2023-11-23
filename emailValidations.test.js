import { describe, expect, it } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./emailValidations";

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

describe("validateArrayNotEmpty", () => {
  it("should validation a non empty array", () => {
    const data = [2, 3];
    const resultFn = () => validateArrayNotEmpty(data);
    expect(resultFn).not.toThrow();
  });

  it(" throw an error for an empty array", () => {
    expect(() => validateArrayNotEmpty([]).toThrow("array can not empty"));
  });

  it(" throw an error for a null input", () => {
    expect(() => validateArrayNotEmpty(null).toThrow("array can not empty"));
  });
});
