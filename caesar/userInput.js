const { process } = require("./process");

exports.check = (shift, action, input, output) => {
  if (shift === true || shift === undefined) {
    console.log("shift is required");
    return;
  }

  if (action === true || action === undefined) {
    console.log("action is required");
    return;
  }

  shift = (action === "encode" ? shift : shift * -1) % 26;

  process(shift, input, output);
};
