const minimist = require("minimist");

const command = minimist(process.argv.slice(2), {
  alias: { s: "shift", a: "action", i: "input", o: "output" },
});

const { shift, action, input, output } = command;

// console.log(shift, action, input, output);
