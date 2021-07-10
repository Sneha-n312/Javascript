//Arrays, Functions and Objects
//Arrays - [], 0 index based

const friends = ['john', 'bob', 'peter', 'anne', 45, undefined, null]
const bestfriend = friends[2]

console.log(friends);
console.log(friends[3]);
console.log(bestfriend);

friends[3] = 'susy'
console.log(friends);

//-------------------------------------------------------------------------------

//Functions - declare, invoke -> they reduce redundancy

// function declaration
function helloBob(){
    //logic
    console.log('Hello Bob');
}
function helloJohn(){
    //logic
    console.log('Hello John');
}

function helloAnne(){
    //logic
    console.log('Hello Anne');
}

helloBob(); // function invocation
helloJohn();
helloAnne();

//-------------------------------------------------------------------------------

//Functions with Parameters
//params - when declare/define
//placeholders, local vars
//arguments - when invoke/call/run
//use vars/values, multiple params, undefined

function greet(name){
    console.log('Hello ' + name);
}

const Elli = 'Elli'

greet() // won't throw an error even if you don't pass an argument, just gives undefined
greet('Susy') //Passing value directly
greet(Elli) // Passing in a variable

//-------------------------------------------------------------------------------
// Functions - return statement
//default undefined, ignores after return statement

//To calculate a value in centimeters
const wallHeight = 80;

function calculate(value){
    // valueinCM = value * 2.54
    return value * 2.54
}
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
//-------------------------------------------------------------------------------

//Function expression - another way to define a function
//create a variable, assign to FUNCTION(not value), use the variable
//function name is optional

const add = function addValues(num1, num2){
    return num1 + num2
}

// you can omit the function name - Anonymous function
const sub = function (num1, num2){
    return num1 - num2
}

const result1 = add(10,5)
const result2 = sub(9,7)
console.log(result1, result2);

console.log(add(3,9));

//-----------------------------------------------------------------------------------
// Arrow functions

const multiply = (num1,num2) => num1 *  num2
console.log(multiply(3,7))

