//Objects - key/value pairs, collection of properties
// if a property value is a function then it is called method
// dot notation

const person ={
    firstName: 'john',
    lastName: 'stew',
    age: 23,
    education: false,
    married: true,
    siblings: ['anna', 'susan', 'bob'],
    greeting: function (){
        console.log('Hello I\'m john');
    },
    //In ES6 you don't even have use the function keyword
    hello(){
        console.log('This is ES6 format');
    }
}

const age = person.age
console.log(age);
person.firstName = 'Harry'
console.log(person.firstName);
console.log(person.siblings[2])

person.greeting();
person.hello();