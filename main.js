// alert:
alert('Hello world');

// -----------------------------------------------------------

// console:
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// -----------------------------------------------------------

// var, let, const

// data types: String, Numbers, Boolean, null, undefined

const name1 = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

typeof age;
typeof x;

// -----------------------------------------------------------

// concatenation
'My name is ' + name1 + ' and I am ' + age;
`My name is ${name1} and I am  ${age}`;
const hello = `My name is ${name1} and I am  ${age}`;

const s = 'Hello World';

s.length;
// 11
s.toUpperCase();
s.toLocaleLowerCase();
s.substring(0, 5);
// Hello
s.substring(0, 5).toUpperCase();
// HELLO
s.split('');
//["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

const r = 'technology, computers, it, code';

r.split(', ');
//["technology", "computers", "it", "code"]

// -----------------------------------------------------------

// Arrays

const Numbers = new Array(1, 2, 3, 4, 5);
const fruits = ['apples', 'oranges', 'pears'];
const ex = ['apples', 'oranges', 'pears', 10, true];

fruits[1];
// oranges

// adding to the end:
fruits[3] = 'grapes';
fruits.push('mangos');
// ['apples', 'oranges', 'pears', 'grapes', 'mangos']

// adding to the beggining:
fruits.unshift('strawberries');
// ['apples', 'oranges', 'pears', 'grapes', 'mangos', 'strawberries']

// delete the last element:
fruits.pop();
// ['apples', 'oranges', 'pears', 'grapes', 'mangos']

// to check if an element is an array or not:
Array.isArray(fruits);
// true
Array.isArray('hello');
// false

// to check the index of an element:
fruits.indexOf('oranges')
// 2

// -----------------------------------------------------------

// Object 

const person = {
    firstName: 'Dania',
    lastName: 'Baradi',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Amman'
    }
}

person.firstName;
// Dania

person.firstName, person.lastName;
// Dania Baradi

person.hobbies[1];
// movies

person.address.city;
// Amman

const {firstName, lastName, address: {city}} = person;

person.email = 'daniabaradi@gmail.com';

// -----------------------------------------------------------

// Arrays with Objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

todos[1].text;
// Meeting with boss

// convert the array into JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
/*
[
    {
        "id": 1,
        "text": "Take out trash",
        "isCompleted": true
    },
    {
        "id": 2,
        "text": "Meeting with boss",
        "isCompleted": true
    },
    {
        "id": 3,
        "text": "Dentist appt",
        "isCompleted": false
    }
];
*/

// -----------------------------------------------------------

// loops

// for

for(let i = 0; i < 10; i++){
    `For Loop Number ${i}`;
}
/*
For Loop Number 0
For Loop Number 1
For Loop Number 2
For Loop Number 3
For Loop Number 4
For Loop Number 5
For Loop Number 6
For Loop Number 7
For Loop Number 8
For Loop Number 9
*/

// while

let i = 0
while(i < 10) {
    `While Loop Number ${i}`;
    i++;
}
/*
While Loop Number 0
While Loop Number 1
While Loop Number 2
While Loop Number 3
While Loop Number 4
While Loop Number 5
While Loop Number 6
While Loop Number 7
While Loop Number 8
While Loop Number 9
*/

for(let i = 0; i < todos.length; i++){
    todos[i].text;
}

/*
Take out trash
Meeting with boss
Dentist appt
*/ 

for(let i of todos) {
    i.id;
}

/*
1
2
3
*/

// forEach

todos.forEach(function(todo){
    todo.text;
});

/*
Take out trash
Meeting with boss
Dentist appt
*/

// -----------------------------------------------------------

// map

todos.map(function(todo){
    return todo.text;
});

// filter

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

todoCompleted

/*
id: 1,
text: 'Take out trash',
isCompleted: true

id: 2,
text: 'Meeting with boss',
isCompleted: true
*/

const todoCompletedtext = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

todoCompletedtext

/*
Take out trash
Meeting with boss
*/

// -----------------------------------------------------------

// if 

const a = 10;

if (a == 10) {
    'x is 10';
}
else {
    ' x is not 10'
}
// x is 10

/*
else if () {
}
*/

const b = 10;
const color = x > 10 ? 'red' : 'blue';

// color = 'blue'

// -----------------------------------------------------------

// == --> does'n matches the datatype
// === --> matches datatype

// -----------------------------------------------------------

// switch

switch(color) {
    case 'red':
        'Color is red';
        break;
    case'blue':
        'Color is blue';
        break;
    default:
        'Color is not red or blue';
        break;
}

// Color is blue

// -----------------------------------------------------------

// functions

function addNums(num1, num2) {
    return num1 + num2;
}

addNums(5, 4);
// 9

addNums();
// NaN

// arrow function

// const addNums = (num1, num2) => num1 + num2;
// const addNums = num1 => num1 + 5;

const addNums = (num1, num2) => {
    return num1 + num2;
}

addNums(5, 5);
// 10

// -----------------------------------------------------------

// oop

