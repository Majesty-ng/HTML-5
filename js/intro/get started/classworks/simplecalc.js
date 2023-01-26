//calc
//variable declaration
var number = parseFloat(prompt("input first number: "))
var number1 = parseFloat(prompt("enter a second number: "))
var op = prompt("Enter your operator")
	
	//functions
	//normal if and else
	
	// if(op == "+"){
	//     console.log(number+number1)
	// }
	// else if(op == "-"){
	//     console.log(number - number1)
	// }
	// else if(op == "*"){
	//     console.log(number * number1)
	// }
	// else if(op == "/"){
	//     console.log(number / number1)
	// }
	// //crazy ifelse
	
op == "+"?
    console.log(number+number1):
    op == "-" ?
        console.log(number - number1):
            op == "/"?
            console.log(number / number1):
                op == "*"?
                console.log(number * number1):
                console.log("not a valid operator!")
