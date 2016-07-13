function uniqueInOrder(iterable) {
  var result = [];
  var last;

  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i]);
    }
  }

  return result;
}

console.log(uniqueInOrder('AAbbBbCCcc'));
console.log(uniqueInOrder([1, 1, 2, 3, 4, 4, 4, 5]));

//could also use a filter
