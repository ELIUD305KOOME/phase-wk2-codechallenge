// function that accepts a string as input and swaps the case of each character
const swapCase = str =>
  [...str].map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())).join("");
