import { describe, it, expect } from "vitest";
import { bmi, bmiCategory } from "../src/bmi";

describe("bmi", () => {
  it("returns weight / height² rounded to 1 decimal", () => {
    expect(bmi(70, 1.75)).toBe(22.9);
  });

  it.skip("throws RangeError when weight is 0 or negative", () => {});

  it.skip("throws RangeError when height is 0 or negative", () => {});

  it.skip("throws TypeError when an argument is NaN or Infinity", () => {});
});

describe("bmiCategory", () => {
  it("returns Underweight below 18.5", () => {
    expect(bmiCategory(18.4)).toBe("Underweight");
  });

  it.skip("returns Normal from 18.5 to below 25", () => {});

  it.skip("returns Overweight from 25 to below 30", () => {});

  it.skip("returns Obese at 30 and above", () => {});
});
