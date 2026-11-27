import { assertFiniteNumber, assertPositive } from "./validate";

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

/**
 * Body Mass Index: weight (kg) divided by height (m) squared,
 * rounded to 1 decimal place.
 * @throws {RangeError} if weightKg or heightM is 0 or negative
 */
export function bmi(weightKg: number, heightM: number): number {
  assertFiniteNumber(weightKg, "weightKg");
  assertFiniteNumber(heightM, "heightM");
  assertPositive(weightKg, "weightKg");
  assertPositive(heightM, "heightM");
  return roundToOneDecimal(weightKg / (heightM * heightM));
}

/** WHO adult BMI categories. */
export type BmiCategory = "Underweight" | "Normal" | "Overweight" | "Obese";

/** A category that applies to BMI values below `below`. */
interface CategoryBand {
  readonly below: number;
  readonly category: BmiCategory;
}

/** WHO bands in ascending order; anything at or above the last is Obese. */
const WHO_BANDS: readonly CategoryBand[] = [
  { below: 18.5, category: "Underweight" },
  { below: 25, category: "Normal" },
  { below: 30, category: "Overweight" },
];

/**
 * Maps a BMI value to its WHO category.
 */
export function bmiCategory(value: number): BmiCategory {
  return WHO_BANDS.find((band) => value < band.below)?.category ?? "Obese";
}
