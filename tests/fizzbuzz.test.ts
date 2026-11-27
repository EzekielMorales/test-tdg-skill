import { describe, it, expect } from "vitest";
import { fizzBuzz } from "../src/fizzbuzz";

describe("fizzBuzz", () => {
  it("returns the number as a string when not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("returns Fizz for multiples of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("returns Buzz for multiples of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("returns FizzBuzz for multiples of 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it.skip("throws RangeError for 0", () => {});

  it.skip("throws RangeError for negative numbers", () => {});

  it.skip("throws RangeError for non-integers", () => {});
});
