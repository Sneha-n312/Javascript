//Implicit Type Conversion

const firstName = 'John'
const lastName = 'Hamburger'
const fullName = firstName + ' ' + lastName
console.log(fullName);

const number1 = 4
const number2 = 10
const result = number1 + number2
console.log(result);

const value = firstName - lastName
console.log(value); // Output is NaN

const number3 = '10'
const number4 = '23'
const result2 = number3 + number4
console.log(result2); //Output is 1023 because JS will concatenate strings

const num5 = 10
let num6 = '23'
let result3 = num5 + num6
const result4 = num5 - num6
console.log(result4) //output is -13 because of implicit conversion
console.log(result3);//Output is 1023 because JS will implicitly convert number to string and concatenate them even if one of the variables is string

//parseInt() is used for explicit conversion
num6 = parseInt(num6); //'23' is converted to integer
result3 = num5 + num6
console.log(result3); //Output is 33 (10 +23)