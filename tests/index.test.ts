import { test, expect } from "vitest";
import { cleanFunction } from "../src";

const sum = cleanFunction(async (a: number, b: number) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid inputs");
  }

  return a + b;
})
  
test("Test async function", async () => {
  const { data, error } = await sum(1, 2)

  expect(data).toBe(3);
  expect(error).toBe(null);
})

test("Test async function (error)", async () => {
  const { data, error } = await sum("1" as any, 2);

  expect(data).toBe(null);
  expect(typeof error?.message).toBe("string");
})
