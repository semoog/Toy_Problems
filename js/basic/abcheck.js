function ABCheck(userString) {
  var a = userString.indexOf('a');
  var b = userString.indexOf('b');

  // while (a >= 0 && b >= 0) {
  for (var i = 0; i < userString.length; i++) {
    a = userString.indexOf('a', i + 1);
    b = userString.indexOf('b', i + 1);
    if ((b - a === 4) || (a - b === 4)) {
      return true;
    }
  }
  return false;
}

console.log(ABCheck("lane borrowed"));
