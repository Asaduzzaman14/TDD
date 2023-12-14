import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from "vitest";
import { encryptMessagePromise } from "./Asynchronous";

beforeAll(() => {
  console.log("Before all");
});

afterAll(() => {
  console.log("afterAll all");
});

afterEach(() => {
  console.log("AFTER EACH TEST");
});

beforeEach(() => {
  console.log("before EACH TEST");
});

it("should be ....", async () => {
  const message = "hello world";
  const key = "22323";
  const encryptData = await encryptMessagePromise(message, key);
  expect(encryptData).toBeDefined();
});
