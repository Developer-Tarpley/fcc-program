
export default function confirmEnding(word, ending){

    // const wordEnding = word[word.length -ending.length]
    const wordEnding = word.slice(-ending.length);
    console.log(wordEnding);
    const isEnding = wordEnding === ending;
    return isEnding;
}

// const result = confirmEnding("Bastian", "n");
const result = confirmEnding("Congratulation", "on");
console.log(result)

// User Stories:

// You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
// The function should return true if the first string ends with the second string, and false otherwise.
// You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.