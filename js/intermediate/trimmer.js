const trimmer = (userString) => {
  let userStringTrimmed = [];
  let userStringSplit = "";
  userStringSplit = userString.split("\n");
  for (let i = 0; i < userStringSplit.length; i++) {
    if (userStringSplit[i].length > 55) {
      userStringTrimmed[i] = userStringSplit[i].substring(0, 40);
      userStringTrimmed[i] = userStringTrimmed[i].trim();
      userStringTrimmed[i] += "... <Read More>";
    }
  }
  return userStringTrimmed.join("\n");
}

console.log(trimmer("This This This This This This This This This This This This This This This This This This This \nThat That That That That That That That That That That That That That That That That That That That That "));
