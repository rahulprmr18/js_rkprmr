// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());

// let myCreatedDate = new Date(2023,0,23)
// let  myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14")

// let myCreatedDate = new Date("04-08-2024")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `{newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long"
})

