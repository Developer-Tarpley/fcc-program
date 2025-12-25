function findLongestWordLength(sentence){
  const wordsArray = sentence.split(" ");
  let wordLength = 0;
  for(let i = 0; i < wordsArray.length; i++){
    console.log("words array: ", wordsArray[i].length)
    if(wordsArray[i].length > wordLength){
      wordLength = wordsArray[i].length
    }
  }

  console.log("word length: ", wordLength);
  return wordLength;
}

let sentence = "The quick brown fox jumped over the lazy dog";

findLongestWordLength(sentence)