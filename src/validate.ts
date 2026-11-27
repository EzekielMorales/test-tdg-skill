/**
 * Throws a TypeError naming the argument if value is NaN or ±Infinity.
 */
export function assertFiniteNumber(value: number, name: string): void {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number, got ${value}`);
  }
}
