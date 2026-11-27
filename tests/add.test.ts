import { describe, it, expect } from "vitest";
import { add } from "../src/add";

describe("add", () => {
  it("returns the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("throws TypeError when an argument is NaN", () => {
    expect(() => add(NaN, 1)).toThrow(TypeError);
    expect(() => add(1, NaN)).toThrow(TypeError);
  });

  it("throws TypeError when an argument is Infinity", () => {
    expect(() => add(Infinity, 1)).toThrow(TypeError);
    expect(() => add(1, -Infinity)).toThrow(TypeError);
  });
});
