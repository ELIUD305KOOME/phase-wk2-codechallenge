//function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array
let input = prompt("Enter numbers to prime (separated by spaces)");
let numbers = input.split(" ").map(Number);
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
          return false;
      }
  }

  return true;
}

function filterPrimes(array) {
  return array.filter(num => isPrime(num));
}

console.log(filterPrimes(numbers));
  