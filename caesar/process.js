const { inputStream, outputStream, transformStream } = require("./file");
const userInput = require("./userInput");
const { pipeline } = require("stream");

exports.process = (shift, input, output) => {
  pipeline(
    inputStream(input),
    transformStream(shift),
    outputStream(output),
    (error) => {
      if (error) {
        console.error("Something went wrong", error);
        process.exit(7);
      }
    }
  );
};
