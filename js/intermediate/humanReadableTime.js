// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

humanReadable = (time) => {

  addPadding = (num) => {
    return ("00" + num).substr(-2,2);
  }

  let hours = addPadding(parseInt(time / (60 * 60)));
  let minutes = addPadding(parseInt(time / 60 % 60));
  let seconds = addPadding(parseInt(time % 60));

  return hours + ":" + minutes + ":" + seconds;
}

console.log(humanReadable(34600));
