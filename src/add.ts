function assertValidNumber(value: number, name: string): void {
  if (Number.isNaN(value)) {
    throw new TypeError(`${name} must be a number, got NaN`);
  }
  if (value === Infinity || value === -Infinity) {
    throw new TypeError(`${name} must be finite, got ${value}`);
  }
}

/**
 * Returns the sum of a and b.
 * @throws {TypeError} if either argument is NaN
 */
export function add(a: number, b: number): number {
  assertValidNumber(a, "a");
  assertValidNumber(b, "b");
  return a + b;
}
