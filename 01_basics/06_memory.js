//Stack(primitive), Heap (Non-primitive)


//stack ==> ek copy hi milta hai (changes done in copy value)
let myName = "Rahul Parmar"
let anothername = myName
anothername = "rkprmr"

console.log(myName);
console.log(anothername);


// Heap ==> reference milta hai {changes is done in atual value}

let userOne = {
    email:"rkparmar1810@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);