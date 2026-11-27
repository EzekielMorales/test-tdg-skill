import { assertFiniteNumber } from "./validate";

/**
 * Returns the difference a - b.
 * @throws {TypeError} if either argument is NaN or ±Infinity
 */
export function minus(a: number, b: number): number {
  assertFiniteNumber(a, "a");
  assertFiniteNumber(b, "b");
  return a - b;
}
