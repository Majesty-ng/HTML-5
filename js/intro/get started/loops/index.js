for(let counter = 1; counter<=10; counter++){
    if((counter%2==0)){
        document.write(`<p>${counter}</p>`)
    }
}
document.writeln(`<p>odd nums</p>`)
for(let counter = 1; counter<=10; counter++){
    // if((counter%2!=0)){
    //     document.write(`<p>${counter}</p>`)
    // }
    if(counter%2 == 0) continue;
     document.write(`<p>${counter}</p>`)
}
//while loop
let iterate = 0
while((iterate<=100)){
    if((iterate%5 == 0)&&(iterate%3==0)){
        document.write(`<p>${iterate} divisible by three and five</p>`) 
    }
    else if((iterate%5 == 0)){
        document.write(`<p>${iterate} divisible by five</p>`)
    }
    else if((iterate%3==0)){
        document.write(`<p>${iterate} divisile by three</p>`)
    }
    iterate++
}

//fpr of- strings
//for in - objects
const majesty = {
    first: "maj",
    second: "esty",
    age: 32
}
for(let item in majesty){
    console.log(majesty[item])
}

let hello = "hello"
const reversestring = (text) =>{
    let rev = ""

    for (let letter of  text){
        rev = letter+ rev
    }
    return rev
}
console.log(reversestring(hello))