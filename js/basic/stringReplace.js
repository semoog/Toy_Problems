const stringReplacer = (string) => {
  string = string.replace(/\s/g, "-");
  string = string.toLowerCase();
  console.log(string);
}

stringReplacer("My name is SEMO");
