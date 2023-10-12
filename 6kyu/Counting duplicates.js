// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
  text = text.toLowerCase();
  let arrayOfLetters = {};
  text.split("").forEach((letter) => {
    Object.keys(arrayOfLetters).includes(letter)
      ? (arrayOfLetters[letter] += 1)
      : (arrayOfLetters[letter] = 1);
  });
  return Object.values(arrayOfLetters).filter((l) => l > 1).length;
}
