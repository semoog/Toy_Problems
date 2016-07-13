const uniqueInOrder = (iterable) => {
  let result = [];
  let last;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i]);
    }
  }

  return result;
};

console.log(uniqueInOrder('AAbbBbCCcc'));
console.log(uniqueInOrder([1, 1, 2, 3, 4, 4, 4, 5]));

//could also use a filter

// function uniqueInOrder(iterable){
//   if (typeof(iterable) == 'string') {
//     return iterable.split('').filter(function (value, index, arr) {
//       if (arr[index] !== arr[index - 1]) {
//         return value;
//       }
//     });
//   }
//   else {
//     return iterable.filter(function (value, index, arr) {
//       if (arr[index] !== arr[index - 1]) {
//         return value;
//       }
//     });
//   }
// }
