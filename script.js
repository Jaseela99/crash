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
    break;

  default:
    console.log("color is not blue or red");
    break;
}

//function

function sum(num1,num2){
return (num1+num2)
}
const add=(num1,num2)=>num1+num2
console.log(sum(5,5))
console.log(add(5,5))
//OOPS
//constructor function
/* function Personed(first,last,dob){
  this.first =first;
  this.last=last;
  this.dob=new Date(dob);
  //methods
//  this.getBirthYear=()=>{
//   return this.dob.getFullYear()
// };
// this.getFullName=function(){
//   return `${this.first} ${this.last}`;
// } 
} */
//instantiate object
/* const personed1 = new Personed("jaseela","jaleel",'2-5-1999');
console.log(personed1.getBirthYear());
console.log(personed1.getFullName()); */
//prototypes

//we do not need methods for every instance of object so we define a prototype
/* Personed.prototype.getBirthYear=()=>{
  return this.dob.getFullYear()
}
Personed.prototype.getFullName=()=>{
  return `${this.first} ${this.last}`
}
console.log(personed1.getBirthYear());
console.log(personed1.getFullName()); */

//Classes
class Personed {
constructor(first,last,dob){
  this.first =first;
  this.last=last;
  this.dob=new Date(dob);
}
//instead of prototypes we add methods here
getBirthYear(){
  return this.dob.getFullYear()
};
getFullName(){
  return `${this.first} ${this.last}`
}
}
const personed1 = new Personed("jaseela","jaleel",'2-5-1999')
console.log(personed1.getBirthYear());
console.log(personed1.getFullName());


//DOM
console.log(window)//window is the topmost object
//single element selector

/* const form=document.getElementById('my-form')
const container=document.querySelector('.container')
 */
//multiple element selector

//returns all the items with class item as a nodelist
//const users = document.querySelectorAll('.item')
//document.getElementsByClassName('item') returns an html collection so to use it we need to convert it in to array
// document.getElementsByTagName('li') returns html collection

//looping through items

/* users.forEach(user=>console.log(user))

const ul = document.querySelector('.items') */
//ul.remove() removes the list
//ul.lastElementChild.remove() to remove last in the list
//ul.firstElementChild.textContent="Hello" edit the text
//ul.children[1].innerText="hi" to change the innertext of second child
//ul.lastElementChild.innerHTML="<h4>hello</h4>" to edit the innerHTML including the tags

//to change styles
//const button = document.querySelector('.btn')
//button.style.background='red'


//add event ,first parnthesis is event and the next is an event handler
/* button.addEventListener('click',(e)=>{
  e.preventDefault()
form.style.background="blue"
//to add classname within the body
document.querySelector('body').classList.add('bg-dark')
ul.style.color="black"
}) */

/* --------------------------------------------------- */
//to add userslist when userdetails are submitted

const form = document.getElementById('my-form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

form.addEventListener('submit',onSubmit)
function onSubmit(e){
  e.preventDefault()
 if(nameInput.value===""|| emailInput.value==="" ){
  msg.classList.add('error')
  msg.innerHTML="required fields are not filled"
  setTimeout(()=>msg.remove(),3000)}
  else{
    //craetes a list element
    const li = document.createElement('li')
    //apppends a textnode to lastchid of the li element
    li.appendChild(document.
      createTextNode(`${nameInput.value}:${emailInput.value}`))
  //appends list items to ul element
  userList.appendChild(li)
  //clearing the fields

  nameInput.value=""
  emailInput.value=""
    }
}

