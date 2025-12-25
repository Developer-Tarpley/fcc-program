
export default function isLeapYear(year){
    let result = "";

    if(year % 400 === 0){
        result = year + " is a leap year."
    }
    else if(year % 100 === 0){
        result = year + " is not a leap year."
    }
    else if(year % 4 === 0){
        result = year + " is a leap year."
    }
    else{
        result = year + " is not a leap year."
    }

    return result;
}

const year = 1900;
const result = isLeapYear(year)
console.log(result)