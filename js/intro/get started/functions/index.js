//var name = prompt("enter your name")
var raduis = parseFloat(prompt("enter first number"))
//var num1 = parseFloat(prompt("enter second number"))
//var varri = prompt("enter variable")
//console.log(name)
//saynigga(name)
const circ = rad =>{
    var circumference = 2*Math.PI *(rad*rad)
    console.log(circumference)
}
//tips in return 
//return terminates the function
//return only return s a single value
// there can only be one return 
//return only return one value

console.log(circ(raduis))
//user defined function: 
function saynigga(name){
    console.log("hello world")
}
//simpleinterest
const interest = (principal, time, rate = 0.5) =>{
    console.log("principal => ",principal)
}
//function with parameters
//parameters: they are external values required by the the function to execute a task
function sayniggasum(num , num1){
    var sum = num + num1
    console.log(sum)
}
function sayniggadiff(num, num1){
    diff1 = num- num1
    diff2  = num1-num
    num > num1?
        console.log(diff1):
        console.log(diff2)
}
function showtype(variable){
    console.log(typeof((variable)))
}
const showtypetwo = value =>{
    console.log(typeof value)
}
const calculator = (firstnum, seconum, op) =>{
    if(op == "+"){
        console.log(firstnum+seconum)
    }
    else if (op == "-"){
        if(firstnum > seconum){
            console.log(firstnum - seconum)
        }
        else{
            console.log(seconum - firstnum)
        }
    }
    else if (op == "/"){
        console.log(firstnum/seconum)
    }
}
const Student = (Eng, maths, che, phy) =>{
    Eng : 30;
    maths : 40;
    che :50;
    phy : 60; 
}

//showtype(varri)
//showtypetwo(varri)
// sayniggasum(num, num1)
// sayniggadiff(num, num1)