console.log("hello");
console.warn("hello");
console.error("hello");

// variables
var a = 1;
var a = 10;

let b;
b = 10;

const c = 10;
console.log(a, b, c);

//datatypes
const name = "jaseela A";
const num = 10;
const isBool = true;
const t = null;
let z;
console.log(typeof name);
console.log(typeof num);
console.log(typeof isBool);
console.log(typeof t);
console.log(typeof z);

//String
console.log("my name is " + name); //conactenation
console.log(`my name is ${name}`); //backticks
//properties doesnt have paranthesis but methods have.
console.log(name.length); //number of characters in a string
//methods-function associated with an object
console.log(name.toUpperCase());
console.log(name.substring(0, 5)); //jasee
console.log(name.split("")); //split by letters turns in to array
console.log(name.split(",")); //if we use seperators we will get seperate words

//Arrays-stores multiple values
const numbers = new Array(1, 2, 3, 4, 5, 6); //keywords starting with new are constructor functions
console.log(numbers);

const fruits = ["apple", "mango", "pineapple", "grapes", "watermelon"];

console.log(fruits[0]); //arrays are zero index based
fruits[3] = "oranges"; //chane the elements already declared
console.log(fruits);

fruits.push("strawberry"); //adds to last
fruits.unshift("blueberry"); //adds to first
fruits.pop(); //removes last
fruits.unshift(); //removes first
console.log(Array.isArray(fruits)); //check whether it is an array
console.log(fruits.indexOf("mango")); //indexof

//object literals
const person = {
  first: "jaseela",
  last: "A",
  age: 23,
  hobbies: ["painting", "reading", "photography"],
  address: {
    place: "chittur",
    district: "palakkad",
    state: "kerala",
  },
};
console.log(person.first, person.last, person.hobbies[1], person.address.state);

const { first, last } = person; //object destructuring
console.log(first);
person.email = "jaseel@gmail.com";
console.log(person);

const todos = [
  {
    id: 1,
    text: "hi",
    isCompleted: true,
  },
  {
    id: 2,
    text: "hello",
    isCompleted: true,
  },
  {
    id: 3,
    text: "eat food",
    isCompleted: false,
  },
];

console.log(todos[1].text);

//JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loop
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}
//for of loop
for (let todo of todos) {
  console.log(todo.text);
}
//while

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//foreach-loops through them ,return undefined
todos.forEach((todo) => {
  console.log(todo.text);
});
//map-newarray
todos.map((todo) => console.log(todo.id));

//filter returns new array when the condition is met
const filtered = todos
  .filter((todo) => {
    return todo.isCompleted === true;
  })
  .map((todo) => todo.id);
console.log(filtered);

//if else

const x = 20;
if (x == 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is >10");
} else {
  console.log("x is not 10");
}

const y = "11";
if (x === 11) {
  console.log("x is 10");
}
//ternary operator
const lay = 10;
const color = lay > 10 ? "red" : "blue";
console.log(color);
//switch
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");

  default:
    console.log("color is not blue or red");
}
