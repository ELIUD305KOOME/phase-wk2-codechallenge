// function that accepts two numbers and generates an array between them
const generateArray = (start, end) =>
  Array.from({
    length: Math.floor(end - start) + 1
  }, (_, i) => start + i);