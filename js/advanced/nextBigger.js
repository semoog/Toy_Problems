//  4kyu

// You have to create a function that takes a positive integer number and returns the next bigger number formed by                                the same digits:
//
// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
//
// If no bigger number can be composed using those digits, return -1:
// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

function nextBigger(n) {
  let nextBigger;
  let narr = n.toString().split('');
  let possibleNums = [];
  let prev = 0;

  for (var i = 0; i < narr.length; i++) {
    for (var j = 0; j < narr.length; j++) {
      possibleNums.push(prev + narr[j]);
      prev = narr[i];
    }
  }


  console.log(possibleNums);
}

nextBigger(513);
