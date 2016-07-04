
function fizzbuzz(n) {
arr = [];
str = '';
for (var i = 1; i <= n; i++) {
  arr[i] = i;
  if (((arr[i] % 3) === 0) && ((arr[i] % 5) === 0)) {
    arr[i] = "Fizz Buzz";
  } else if ((arr[i] % 3) === 0){
    arr[i] = "Fizz";
  }
  else if ((arr[i] % 5) === 0) {
    arr[i] = "Buzz";
  }
  str += arr[i];
  if (i < n) {
    str += ', ';
  }
}
console.log(str);
}

fizzbuzz(50);
