const minimist = require("minimist");

const userInput = require("./userInput");

const command = minimist(process.argv.slice(2), {
  alias: { s: "shift", a: "action", i: "input", o: "output" },
});

const { shift, action, input, output } = command;

userInput.check(shift, action, input, output);

// console.log(shift, action, input, output);
