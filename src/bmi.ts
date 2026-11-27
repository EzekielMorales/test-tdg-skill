export function bmi(weightKg: number, heightM: number): number {
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}
