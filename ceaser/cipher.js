const letters = "abcdefghijklmnopqrstuvwxyz";
const capitalLetters = letters.toUpperCase();

exports.caesar = (text, shift) => {
  const map = Array.prototype.map;
  return map
    .call(text, (char) => {
      if (letters.includes(char)) {
        let position = (letters.indexOf(char) + shift) % letters.length;
        position = position < 0 ? letters.length + position : position;
        return letters[position];
      }
      if (capitalLetters.includes(char)) {
        let position =
          (capitalLetters.indexOf(char) + shift) % capitalLetters.length;
        position = position < 0 ? capitalLetters.length + position : position;
        return capitalLetters[position];
      }
      return char;
    })
    .join("");
};
