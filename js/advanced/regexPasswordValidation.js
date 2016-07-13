// You need to write regex that will validate a password to make sure it meets the follwing criteria:
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

const validate = (password) => {
  return /(((?=\w*[a-z]))((?=\w*[A-Z]))((?=\w*[0-9]))(?!.*([;]))).{6,}/g.test(password);
}

console.log(validate('Hf13j19!'));
console.log(validate('passWord123'));
console.log(validate('pass')); //false, not 6 characters, no number, no uppercase letter
console.log(validate('JD83ja0;')); //false, semicolon
console.log(validate('wordpaSs2'));
