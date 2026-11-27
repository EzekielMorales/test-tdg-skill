function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

/**
 * Body Mass Index: weight (kg) divided by height (m) squared,
 * rounded to 1 decimal place.
 */
export function bmi(weightKg: number, heightM: number): number {
  return roundToOneDecimal(weightKg / (heightM * heightM));
}

/** WHO adult BMI categories. */
export type BmiCategory = "Underweight" | "Normal" | "Overweight" | "Obese";

/** WHO cut-off: values below this are Underweight. */
const NORMAL_MIN = 18.5;

/**
 * Maps a BMI value to its WHO category.
 */
export function bmiCategory(value: number): BmiCategory {
  if (value < NORMAL_MIN) return "Underweight";
  return "Normal";
}
