
export default function truncateString(sentence, numOfCharacters){
    sentence = String(sentence);
    if(typeof numOfCharacters !== "number"){
        return "Invalid truncate number";
    };

    if(sentence.length <= numOfCharacters){
        return sentence;
    }

    if(sentence.length > numOfCharacters){
        let truncated = sentence.slice(0, numOfCharacters) + "...";
        return truncated;
    }


}

const sentence = "A-tisket a-tasket A green and yellow basket";
const result = truncateString(sentence, 8);
console.log(result);


// User Stories:

// You should have a function truncateString that accepts two arguments, the first one a string, the second one a number.
// If the length of the string is more than the given number, the string should be truncated to reduce the length so that it is equal the given number, and ... should be appended at the end of the truncated string.
// If the length of the string is equal to or lower than the given number, the string should be returned unchanged.