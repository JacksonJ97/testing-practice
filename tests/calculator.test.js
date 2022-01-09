import calculator from "../code/calculator";

test("1 + 2 equals 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("2 - 1 equals 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("1 * 2 equals 2", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("2.5 * 3 equals 7.5", () => {
  expect(calculator.multiply(2.5, 3)).toBe(7.5);
});

test("2 / 2 equals 1", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test("2 / 0 equals null", () => {
  expect(calculator.divide(2, 0)).toBeNull();
});

test("1 / 2 equals 0.5", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});
