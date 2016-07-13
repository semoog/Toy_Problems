const ABCheck = (userString) => {
  let a = userString.indexOf('a');
  let b = userString.indexOf('b');

  for (let i = 1; i < userString.length; i++) {
    a = userString.indexOf('a', i);
    b = userString.indexOf('b', i);
    if ((b - a === 4) || (a - b === 4)) {
      return true;
    }
  }
    return false;
}

console.log(ABCheck("lane borrowed"));
