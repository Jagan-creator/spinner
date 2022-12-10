process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   \n"];

let spinnerOutput = function() {
  let i = 0;
  for (const position of spinner) {
    setTimeout(() => {
      process.stdout.write(position);
    }, 200 * i, position);
    i++;
  }
}

spinnerOutput();