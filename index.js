//declare a variable called x
/*
  declare a variable and assign Swabbie
 */
var x= "Swabbie"
console.log(x)

//For loop
for(let i=1; i<=5; i++) {
    console.log("code " + i)
}
//While loop
var i = 1;
while( i < 5) {
    console.log("Code " + i);
    i++
}
//Break & Continue
var i = 1;
while( i < 5) {
    if(i == 2) {
        console.log("Code " + i);
    }
    else(i == 3) break
    i++
}
    

document.getElementById("Message").innerHTML = "Hooray, You have used Javascript!";
