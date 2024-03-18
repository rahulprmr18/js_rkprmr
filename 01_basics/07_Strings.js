// '' or " " both are valid in js

const name = "Rahul"
const Count = 50

// console.log(name + Count + " Value");

console.log(`Hello my name is ${name} and my count is ${Count}`);


const gameName = new String('rkprmr_bhadran_anand')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt('4'));

console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherSting = gameName.slice(-8,5)
console.log(anotherSting);



const newStringOne = "      Rahul Parmar  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahul.com/rkprmr5766"

console.log(url.replace('%20','-'))


console.log(url.includes('sundar'));

console.log(gameName.split('_'));


