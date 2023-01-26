const age = 50; 
const value= "react";

const myObj = {
    age, value
}

const {age: myotherage, value: myothervalue} = myObj;
console.log(myotherage)
console.log(myObj.age);                     
