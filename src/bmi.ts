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
