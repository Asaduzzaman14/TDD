import { expect, it } from "vitest";
import { cleanNumbers } from "./numbers";

it("should retrun an array of numbers if an array of string provided ", () => {
  const stringNumbers = ["2", "3"];

  const result = cleanNumbers(stringNumbers);
  expect(result[0]).toBeTypeOf("number");
});

it("should retrun an array of numbers if an array of string provided ", () => {
  const stringNumbers = [" ", "3"];

  const result = () => cleanNumbers(stringNumbers);

  expect(result).toThrow();
});
