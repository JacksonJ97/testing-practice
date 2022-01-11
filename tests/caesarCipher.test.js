import caesarCipher from "../code/caesarCipher";

test("test the alphabet", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toMatch("bcdefghijklmnopqrstuvwxyza");
});

test("test spaces", () => {
  expect(caesarCipher("defend the east")).toMatch("efgfoe uif fbtu");
});

test("test punctuation", () => {
  expect(caesarCipher("punctuation.test!")).toMatch("qvoduvbujpo.uftu!");
});

test("test keeping the same case", () => {
  expect(caesarCipher("Defend the East")).toMatch("Dfgfoe uif Ebtu");
});
