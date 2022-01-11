const caesarCipher = (str) => {
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const strArray = str.split("");

  const cipheredArray = strArray.map((character) => {
    const index = alphabetArray.findIndex((letter) => letter === character);

    if (index !== -1) {
      const newIndex = (index + 1) % 26;
      return alphabetArray[newIndex];
    } else {
      return character;
    }
  });

  return cipheredArray.join("");
};

export default caesarCipher;
