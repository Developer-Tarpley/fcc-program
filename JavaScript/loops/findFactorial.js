  let num = 5;

function factorialCalculator (number){
  let result = 1;

  while(number > 0){
    result = result * number
    console.log(result)
    number = number - 1
  }

  return result;

}

const factorial = factorialCalculator(num)

const resultMsg = "Factorial of " + num + " is " + factorial;

console.log(resultMsg)