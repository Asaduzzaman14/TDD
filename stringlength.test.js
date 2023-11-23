import { expect, it } from "vitest";
import { returnStringlength } from "./stringlength";

it("return correct langth for non empty string", () => {
  expect(returnStringlength("hello")).toBe(5);
  expect(returnStringlength("world")).toBe(5);
  expect(returnStringlength("hello world")).toBe(11);
});

it("return 0 for empty string", () => {
  expect(returnStringlength("")).toBe(0);
});

it("throw error for non-string input", () => {
  expect(() => returnStringlength(null)).toThrow();
  expect(() => returnStringlength(undefined)).toThrow();
  // expect(() => returnStringlength(123)).toBeUndefined();
});
