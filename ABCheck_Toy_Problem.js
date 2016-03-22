function ABCheck (userString) {
  var stringSplit = userString.split('');
  var a = stringSplit.indexOf("a");
  var b = stringSplit.indexOf("b");

  if (b - a === 3) {
    return true;
  }
  else
    return false;
}
