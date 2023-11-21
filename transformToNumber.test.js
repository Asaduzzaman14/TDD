import { expect, it } from "vitest";
import { transformToNumber } from "./transformToNumber";

it("it should be a number if a numeric string is provided", () => {
  const stringNumber = "33";
  const result = transformToNumber(stringNumber);

  expect(result).toBeTypeOf("number");
  expect(isNaN(result)).not.toBe(true);
});
