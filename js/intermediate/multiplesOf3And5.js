// Return sum of all natural numbers under n that are divisible by 3 or 5.

multiples = (n) => {
  let sum = 0;
  for (var i = 0; i < n; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
    }
  }
  return sum;
}

console.log(multiples(20));
