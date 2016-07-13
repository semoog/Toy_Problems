function ABCheck(userString) {
  var a = userString.indexOf('a');
  var b = userString.indexOf('b');

  for (var i = 1; i < userString.length; i++) {
    a = userString.indexOf('a', i);
    b = userString.indexOf('b', i);
    if ((b - a === 4) || (a - b === 4)) {
      return true;
    }
  }
    return false;
}

console.log(ABCheck("lane borrowed"));
