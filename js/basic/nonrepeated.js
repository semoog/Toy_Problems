function nonrepeated(arr){
  for (var i = 0; i < arr.length; i++) {
    if((arr[i] !== arr[i-1]) && (arr[i] !== arr[i + 1])){
      return arr[i];
    }
  }
}

var str = "GGGGGHHPHHEEEEEEEHHHHHHZZ";

console.log(nonrepeated(str));
