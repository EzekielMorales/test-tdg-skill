export function fizzBuzz(n: number): string {
  if (n === 0) throw new RangeError(`n must be a positive integer, got ${n}`);
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}
