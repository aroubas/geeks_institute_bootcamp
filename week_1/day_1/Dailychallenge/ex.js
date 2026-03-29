let sentence = "The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1) {
    let part1 = sentence.slice(0, wordNot);
    let part2 = sentence.slice(wordBad + 3);
    sentence = part1 + "good" + part2;
}

console.log(sentence);