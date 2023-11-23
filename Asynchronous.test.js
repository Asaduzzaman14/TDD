import { expect, it } from "vitest";
import { encryptMessagePromise } from "./Asynchronous";

it("should be ....", async () => {
  const message = "hello world";
  const key = "22323";
  const encryptData = await encryptMessagePromise(message, key);
  expect(encryptData).toBeDefined();
});
