import reverseString from "../code/reverseString";

test("reverse to esrever", () => {
  expect(reverseString("reverse")).toMatch("esrever");
});

test("redivider to redivider", () => {
  expect(reverseString("redivider")).toMatch("redivider");
});

test("reverse string to gnirts esrever", () => {
  expect(reverseString("reverse string")).toMatch("gnirts esrever");
});

test("  reverse   string   to   gnirts   esrever  ", () => {
  expect(reverseString("  reverse   string  ")).toMatch("  gnirts   esrever  ");
});
