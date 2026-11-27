function assertNotNaN(value: number, name: string): void {
  if (Number.isNaN(value)) {
    throw new TypeError(`${name} must be a number, got NaN`);
  }
}

/**
 * Returns the difference a - b.
 * @throws {TypeError} if either argument is NaN
 */
export function minus(a: number, b: number): number {
  assertNotNaN(a, "a");
  assertNotNaN(b, "b");
  return a - b;
}
