import { describe, it, expect } from "vitest";
import { minus } from "../src/minus";

describe("minus", () => {
  it("returns the difference of two numbers", () => {
    expect(minus(5, 3)).toBe(2);
  });

  it("returns a negative result when b is greater than a", () => {
    expect(minus(3, 5)).toBe(-2);
  });

  it.skip("throws TypeError when an argument is NaN", () => {});

  it.skip("throws TypeError when an argument is Infinity", () => {});
});
