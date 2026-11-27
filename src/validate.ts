/**
 * Throws a TypeError naming the argument if value is NaN or ±Infinity.
 */
export function assertFiniteNumber(value: number, name: string): void {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number, got ${value}`);
  }
}

/**
 * Throws a RangeError naming the argument if value is 0 or negative.
 */
export function assertPositive(value: number, name: string): void {
  if (value <= 0) {
    throw new RangeError(`${name} must be positive, got ${value}`);
  }
}

/**
 * Throws TypeError for NaN/±Infinity, then RangeError for 0 or negative.
 */
export function assertPositiveFinite(value: number, name: string): void {
  assertFiniteNumber(value, name);
  assertPositive(value, name);
}
