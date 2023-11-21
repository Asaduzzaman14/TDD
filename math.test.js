import { expect, it } from "vitest";
import { add } from "./math";

it("it should retrun the correct sum of an array of number is provided ", () => {
  // arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);

  // actions
  const result = add(numbers);

  // asseration
  expect(result).toBe(expectedResult);
});

it("it should provide NaN if at least one invalid number provided ", () => {
  // arrange
  const numbers = [1, "inv", 3];

  // actions
  const result = add(numbers);

  // asseration
  expect(result).toBeNaN();
});

it("it should provide correct sum if an array numeric string is provided ", () => {
  // arrange
  const numbers = ["1", "3", "3"];
  const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);
  // actions
  const result = add(numbers);

  // asseration
  expect(result).toBe(expectedResult);
});

it("it should throw an error if no arguments pass ", () => {
  try {
    const result = add();
  } catch (error) {
    expect(error).toBeDefined();
  }
});

it("it should throw an error if no arguments pass ", () => {
  const errorFun = () => {
    add();
  };

  expect(errorFun).toThrow();
});
