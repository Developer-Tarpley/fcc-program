const aleph_bet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(string){
  let slicedIndexStart = aleph_bet.indexOf(string[0]);
  let slicedIndexEnd = aleph_bet.indexOf(string[string.length -1]);

  let missingLetter = "";
  let segment = aleph_bet.slice(slicedIndexStart, slicedIndexEnd + 1)
  for (let i = 0; i < string.length; i++){
    if(string[i] !== segment[i]){
      missingLetter = segment[i];
      break;
    }else{
      missingLetter = undefined;
    }
  }
  return missingLetter;

}


// const result = fearNotLetter("abce")
// const result = fearNotLetter("abcdefghjklmno")
// const result = fearNotLetter("stvwx")
// const result = fearNotLetter("bcdf")
// console.log(result)