import { assertFiniteNumber } from "./validate";

/**
 * Returns the sum of a and b.
 * @throws {TypeError} if either argument is NaN or ±Infinity
 */
export function add(a: number, b: number): number {
  assertFiniteNumber(a, "a");
  assertFiniteNumber(b, "b");
  return a + b;
}
