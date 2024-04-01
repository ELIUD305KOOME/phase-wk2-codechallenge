//function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array
const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getPrimes = arr => arr.filter(isPrime);
  