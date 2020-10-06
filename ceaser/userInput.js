const cipher = require("./cipher");

exports.check = (shift, action, input, output) => {
  if (shift === true || shift === undefined) {
    console.log("shift is required");
    return;
  }

  if (action === true || action === undefined) {
    console.log("action is required");
    return;
  }

  cipher.ceaser(shift, action, input, output);
};
