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

  it("returns Normal from 18.5 to below 25", () => {
    expect(bmiCategory(18.5)).toBe("Normal");
    expect(bmiCategory(24.9)).toBe("Normal");
  });

  it("returns Overweight from 25 to below 30", () => {
    expect(bmiCategory(25)).toBe("Overweight");
    expect(bmiCategory(29.9)).toBe("Overweight");
  });

  it.skip("returns Obese at 30 and above", () => {});
});
