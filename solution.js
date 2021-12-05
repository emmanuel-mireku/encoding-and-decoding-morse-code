// first solution is to store the morse code characters in a map
// and encode the morse code with the map reference.

let morseCodeCharsAndVals = [
  [".-", "A"],
  ["-...", "B"],
  ["-.-.", "C"],
  ["-..", "D"],
  [".", "E"],
  ["..-.", "F"],
  ["--.", "G"],
  ["....", "H"],
  ["..", "I"],
  [".---", "J"],
  ["-.-", "K"],
  [".-..", "L"],
  ["--", "M"],
  ["-.", "N"],
  ["---", "O"],
  [".--.", "P"],
  ["--.-", "R"],
  [".-.", "S"],
  ["...", "T"],
  ["..-", "U"],
  ["...-", "V"],
  [".--", "W"],
  ["-..-", "X"],
  ["-.--", "Y"],
  ["--..", "Z"],
  ["-----", "0"],
  [".----", "1"],
  ["..---", "2"],
  ["...--", "3"],
  ["....-", "4"],
  [".....", "5"],
  ["-....", "6"],
  ["--...", "7"],
  ["---..", "8"],
  ["----.", "9"],
];

let morseCodeMap = new Map(morseCodeCharsAndVals);

let encodeMorseCode = (code) => {
  let result = [];
  let input = code.toString().split("  ");
  for (let i = 0; i < input.length; i++) {
    let subResult = [];
    let subInput = input[i].split(" ");
    for (let j = 0; j < subInput.length; j++) {
      console.log(morseCodeMap.get(subInput[j]));
      if (morseCodeMap.has(subInput[j]))
        subResult.push(morseCodeMap.get(subInput[j]));
    }
    result.push(subResult.join(""));
  }
  return result.join(" ");
};

let input = ". -- -- .- -. ..- . .-..  -- .. --.- . -.- ..-"; // Should return "Emmanuel Mireku"
console.log(encodeMorseCode(input));
// Returns "EMMANUEL MIREKU"
