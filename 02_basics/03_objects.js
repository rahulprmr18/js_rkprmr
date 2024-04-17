//Object.create() -- constructor Method ke through
// singleton 

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"Rahul",
    fullname:"Rahul Parmar",
    [mySym]:"mykey1",
    age:22,
    location:"Anand",
    email:"rahul@gmail.com",
    isLoggedIn:false,
    lastLoginDas:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);


JsUser.email = "rony@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "rpmo1810@gmsil.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());