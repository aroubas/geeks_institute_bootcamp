const morse = `{ "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----." }`;


const toJs =(morseString) => {
  return new Promise((resolve, reject) => {
    const morseObject = JSON.parse(morseString);

    if (Object.keys(morseObject).length === 0) {
      reject("Error: The Morse string is empty!");
    } else {
      resolve(morseObject);
    }
  });
};

const toMorse = (morseJS) => {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word to translate to Morse code:");
    const characters = userInput.toLowerCase().split("");
    const translation = [];

    for (let char of characters) {
      if (char === " ") continue; // Skip spaces for this specific array output

      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" does not exist in the dictionary!`);
        return; // Stop execution if error found
      }
    }
    resolve(translation);
  });
};

// Function 3: Array to DOM
const joinWords = (morseTranslation) => {
  // Join with \n (newline) as requested
  const result = morseTranslation.join("\n");
  document.getElementById("morseOutput").innerText = result;

};

// --- The Chain ---
toJs(morse)
  .then(morseJS => toMorse(morseJS))
  .then(translation => joinWords(translation))
  .catch(err => alert(err)); // Use alert to show the error to the user

  