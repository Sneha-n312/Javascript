//Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===
// == checks only value
// === checks value and type

if(true){
    console.log('hello world');
}

value = true
if(value){
    console.log('hello world');
}

value = 2>1
if(value){
    console.log('hello world');
}

value = false
if(value){
    console.log('This will not run');
}

if(!value){
    console.log('value is false -- but this will run due to negation')
}

if(value){
    console.log('This will not run');
} else {
    console.log('This will run else statement');
}

//Equality

const num1 = 6
const num2 = '6'

const value1 = num1 == num2
const value2 = num1 === num2

const value3 = num1 != num2
const value4 = num1 !== num2

console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);


//Logical Operators
// (|| - OR), (&& - AND)

const user = 'bob'
const age = 26

if(user === 'bob' || age === 24){
    console.log('Hello user');
} else {
    console.log('wrong values');
}

if(user === 'bob' && age === 24){
    console.log('Hello user');
} else {
    console.log('wrong values');
}