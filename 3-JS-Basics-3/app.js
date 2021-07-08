//Variables - Most basic building blocks.
//Variables - Used to store, access, modify a value
// Declaration -> Assignment Operator -> Assign Value

// Can contain digits, letters, underscore, $
// Must start with a letter, $ or _

//no keyword
//Cannot start with number

//Case sensitive 
//camelCase or underscore 

//using var
var value = "some value"

//using const (CONSTANT) - can't re-assign, must always be assigned a value
const lastName = "Jordon"

//using let
let myName = 'some name'
let address, zip

console.log(myName)

address = '221B'
zip = '60045'

myName = 'Burrito'

console.log(address, zip, myName);
console.log(value);
console.log(lastName);

//---------------------------------------------------------------------------
// To use " " or ' '

const name = 'John\'s courses are awesome'
const newName = "John's courses are awesome"

//---------------------------------------------------------------------------
//String Concatenation - combine string values
// `` - backticks (template strings) are easier option

const myFirstName = 'John'
const myLastName = 'Fish'
let fullName = myFirstName + ' ' + myLastName

console.log('Hello there, I am ' + myFirstName + ' ' + myLastName );
console.log('Hello, I am ' + fullName);

const website = 'google'
const url = 'https://www.' + website + '.com' 
console.log(url);