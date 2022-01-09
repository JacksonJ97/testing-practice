import capitalize from "../code/capitalize";

test("Test to Test", () => {
  expect(capitalize("Test")).toMatch("Test");
});

test("test to Test", () => {
  expect(capitalize("test")).toMatch("Test");
});
