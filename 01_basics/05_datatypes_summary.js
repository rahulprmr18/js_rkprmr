// # Primitive {Call by Value}
// 7 types: String ,Number ,Boolean, Undefined ,null, Symbol, BigInt


// JS Is Dynamic Or Static??
// Ans: Dynamic programming language ==> its allows variable to change their data type during runtime
// Statically typed and dynamically typed languages are two different approaches to type checking in programming languages:

// 1. Statically Typed Languages:
// - In statically typed languages like Java, C, and C++, variable types are checked at compile time.
// - Type checking occurs before the program runs, ensuring that only values of the correct type are assigned to variables.
// - Type errors are caught during compilation, reducing the chances of runtime errors related to type mismatches.
// - Statically typed languages often require explicit declaration of variable types.

// 2. Dynamically Typed Languages:
// - In dynamically typed languages like Python, JavaScript, and Ruby, variable types are checked at runtime.
// - Type checking occurs as the program runs, allowing for more flexibility as variables can change types during execution.
// - Type errors are typically caught during runtime, which can lead to more flexibility but also increases the chances of encountering type-related bugs during execution.
// - Dynamically typed languages usually do not require explicit declaration of variable types, as types are inferred based on the assigned values.

//number
const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue);

//boolean
const isLoggedIn = false
console.log(typeof isLoggedIn);

//String
let Name = "Rahul"
console.log(typeof Name);

//null
const outsideTemp = null
console.log(typeof outsideTemp);

// undefined
let userEmail;
console.log(typeof userEmail);

//symbol
// Symbols are used to create object properties, for example, when you want to assign a unique identifier to an object.
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid);
console.log(typeof id);

//BigInt
const BigInt = 9265424895n
console.log(typeof BigInt);


// Non Primitive {call by Reference}{typeof ==>for all non primitive  DT their type is object and for function it is  object-function}
// Array , Objects , Functions

// Array
const heros = ["shaktiman" , "Nagraj" ,"doga"];
console.log(typeof heros);

//Objects
let myObj = {
    name:"Rahul",
    Age:22
}
console.log(typeof myObj);

//functions
const myFunctions = function(){
    console.log("Hello world")
}
console.log(typeof myFunctions);

