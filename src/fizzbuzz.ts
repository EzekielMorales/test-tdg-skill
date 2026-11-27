function assertPositiveInteger(n: number): void {
  if (!Number.isInteger(n) || n < 1) {
    throw new RangeError(`n must be a positive integer, got ${n}`);
  }
}

/**
 * Returns "FizzBuzz" for multiples of 15, "Fizz" for multiples of 3,
 * "Buzz" for multiples of 5, and the number itself otherwise.
 * @throws {RangeError} if n is not a positive integer
 */
export function fizzBuzz(n: number): string {
  assertPositiveInteger(n);
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}
