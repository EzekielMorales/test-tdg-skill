/**
 * Returns the difference a - b.
 */
export function minus(a: number, b: number): number {
  if (Number.isNaN(a) || Number.isNaN(b)) throw new TypeError("argument is NaN");
  return a - b;
}
