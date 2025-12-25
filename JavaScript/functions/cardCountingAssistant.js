

let count = 0;
export default function cardCounter(card){

    if( typeof card == 'number' && card <= 6){
        count = count + 1;
    }else if(typeof card == 'number' && card >= 7 && card <=9){
        count = count + 0;
    }else{
        count = count - 1;
    }    

    if(count > 0){
        return count + " Bet";
    }else{
        return count + " Hold";
    }

}
cardCounter(3)
cardCounter(2)
cardCounter(4)
cardCounter(5)
console.log(cardCounter(6));