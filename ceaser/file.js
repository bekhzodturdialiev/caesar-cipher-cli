const fs = require("fs");

const Transform = require("stream").Transform;
const { caesar } = require("./cipher");
const { StringDecoder } = require("string_decoder");

const inputStream = (inputFileName) => {
  if (inputFileName) {
    fs.access(inputFileName, (error) => {
      if (!error) {
        return fs.createReadStream(inputFileName);
      } else {
        console.log("Input file does not exist");
        process.exit(7);
      }
    });
  }

  return process.stdin;
};

const outputStream = (outputFileName) => {
  if (outputFileName) {
    fs.access(outputFileName, (error) => {
      if (!error) {
        return fs.createOutputStream(outputFileName);
      } else {
        console.log("Output file does not exist");
        process.exit(7);
      }
    });
  }

  return process.stdout;
};

const transformStream = (shift) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      // Exit on CTRL + C.
      if (chunk === "\u0003") {
        process.exit(7);
      }

      this.push(caesar(chunk.toString("utf8"), shift));
      callback();
    },
  });
};

module.exports = {
  inputStream: inputStream,
  outputStream: outputStream,
  transformStream: transformStream,
};
