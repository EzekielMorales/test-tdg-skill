function assertFiniteNumber(value: number, name: string): void {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number, got ${value}`);
  }
}

/**
 * Returns the sum of a and b.
 * @throws {TypeError} if either argument is NaN or ±Infinity
 */
export function add(a: number, b: number): number {
  assertFiniteNumber(a, "a");
  assertFiniteNumber(b, "b");
  return a + b;
}
