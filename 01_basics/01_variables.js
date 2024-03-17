const accountId =  14662
let accountEmail = "rkparmar181@gmail.com"
var accountPassword = "18102001"
let accountCity = "Jaipur"
let accountstate = "rajasthan"

//accountId = 2 //not allowed

accountEmail = "rkparmar1810@gmail.com"
accountPassword = "1810681"
accountCity = "vadodara"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])